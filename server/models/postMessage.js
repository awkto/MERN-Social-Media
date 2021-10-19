import mongoose from 'mongoose';

//going to specify that each post is going to have these things
//title, message, creator, tags
const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
});

//now that we have a Schema, we turn it into a Model
const PostMessage = mongoose.model('PostMessage', postSchema);

// we are exporting a MONGOOSE model from the postMessage file
export default PostMessage;