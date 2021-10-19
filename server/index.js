import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

//related to Routes and posts
import postRoutes from './routes/posts.js';

// above lines use 'import' syntax
// requires change in package.json to support newer 'import' syntax
// this line under main
// "type": "module",

const app = express();

//related to Routes and posts
app.use('/posts', postRoutes);

//bodyParser deprecated but can still use methods
app.use(bodyParser.json({limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://mernuser:nocurtains@cluster0.fs8yo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

// BELOW LINES ARE DEPRECATED 
// mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
//     .catch((error) => console.log(error.message));
// mongoose.set('useFindAndModify', false);

mongoose.connect(CONNECTION_URL).then(()=>app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
