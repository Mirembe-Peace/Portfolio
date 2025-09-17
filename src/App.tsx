import { Suspense, lazy } from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const BlogPage = lazy(() => import("./components/BlogPage"));
const AboutMe = lazy(() => import("./components/AboutMe.tsx"));
const ProjectsPanel = lazy(() => import("./components/ProjectsPanel.tsx"));
const ProfilePanel = lazy(() => import("./components/ProfilePanel.tsx"));
const BlogPanel = lazy(() => import("./components/BlogPanel.tsx"));
//import ButtonOne from './components/ButtonOne.tsx';
import NavLinks from './components/NavLinks.tsx';


// function to create a div to hold the message component
function App() {
 // we can pass the list as attributes of an html element
    return (
        <div>
            
            <Router>
                <NavLinks/>
                <Routes>
                    <Route path="/" element={<BlogPage/>}/>
                </Routes>
            </Router>
            
            <main className="container">
                <div className="profile">
                    <Suspense fallback={<div className="p-10 bg-info bg-opacity-5"> Loading... </div>}>
                    <ProfilePanel/>
                    </Suspense>
                </div>
                <div className="content">
                    <Suspense fallback={<div className="p-10 bg-info bg-opacity-5"></div>}>
                    <section id="home" ><AboutMe/></section>
                    <section id="projects-panel" ><ProjectsPanel/></section>
                    <section id="blogs"><BlogPanel/></section> 
                    </Suspense>
                </div>
            </main>

        </div>
    ); }

export default App;

