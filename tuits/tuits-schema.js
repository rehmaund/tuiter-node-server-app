import mongoose from 'mongoose';
const schema = mongoose.Schema({
    topic: String,
    username: String,
    handle: String,
    time: String,
    image: String,
    title: String,
    tuit: String,
    liked: Boolean,
    likes: Number,
    replies: Number,
    retuits: Number,
    disliked: Boolean,
    dislikes: Number
}, {collection: 'tuits'});
export default schema;