// configuring the express server

import path from "path";
import {fieURLToPath} from "url";
import mainRoutes from "./routes/main.js";

require('dotenv').config();

const express = require('express');
const expressLayout = require("express-ejs-layouts");

const app = express();

const PORT = process.env.PORT || 5000;
app.use(express.static('public'));

//fixing _dirname in the ES module
const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);

// serve shared static files
app.use(express.static(path.join(_dirname, "../public")));


//template engine
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

//routes for server side pages
app.use("/", mainRoutes);

//serve react build after running vite build
app.use(express.static(path.join(_dirname, "../dist")));

app.get("*", (req, res) => {
    res.sendFile(path.join(_dirname, "../dist/index.html"));
});

app.listen(PORT, ()=> {
    console.log(`app listening on port ${PORT}`);
});
