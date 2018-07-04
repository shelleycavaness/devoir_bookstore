import mongoose from 'mongoose';
const Schema= mongoose.Schema

const bookSchema = new Schema({
    title:{ type: String, index:true},
    author: {type: String, index:true},
    editor: String,
    price: Number,
    pages: Number,
    cover: String
})

const Book = mongoose.model('Book', bookSchema)
export { Book } 