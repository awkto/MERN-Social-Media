import express from 'express';

const router = express.Router();

//our first route
//user visiting */ URL will trigger callback arrow function
// localhost:5000/posts
router.get('/', (req, res) => {
    res.send('THIS WORKS!');
});

export default router;
