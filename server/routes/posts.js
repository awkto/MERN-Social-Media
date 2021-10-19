import express from 'express';

import { getPosts, createPost } from '../controllers/posts.js'

const router = express.Router();

//our first route
//user visiting */ URL will trigger callback arrow function
// http://localhost:5000/posts

// commented out to move into posts.js instead
// router.get('/', (req, res) => {
//     res.send('THIS WORKS!');
// });

//this version works with posts.js
router.get('/', getPosts);
router.post('/', createPost);


export default router;
