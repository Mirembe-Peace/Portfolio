import { Router } from 'express';
const router = Router();

//routes
router.get('/blog_page_01', (req, res) => {
    res.render('blog_page_01');
});

export default router;