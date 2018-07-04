import express from 'express';
const bookRouter = express.Router()
import {Book} from '../models/book'
import multer from 'multer'
const upload = multer({dest: 'public/uploads' })

bookRouter.get('/', (req, res)=>{
    Book.find({}, (err, books) =>{
        if(err)res.send(err)
       // res.json(books)
        res.render('index', {books} ) // pre Ecma6 {books:books}
    })
})


bookRouter.get('/mybook', (req, res)=>{
    res.render('newbook')
})

bookRouter.post('/add', upload.single('cover'), //name of photo in model
(req, res)=>{
    const addBook = new Book(req.body)
    if(req.file){
        addBook.cover = req.file.filename  //the new instance of the book plus the name of the model
    } else{
        addBook.cover ="image not available"
    }

    addBook.save((err, book) =>{ 
        if(err) res.send(err)
        //res.json(book)
        res.redirect('/')
       
    })
})

// make sure this one is later in the code or it will break everything!!!!
bookRouter.get('/:id', (req, res)=>{
    Book.findById(req.params.id, (err, book) =>{
        if(err) res.send(err)
        //res.json(book) 
       res.render('detail_book', {book})
    })
})

bookRouter.put('/:id', (req, res)=>{
    Book.findById({_id:req.params.id}, (err, book) =>{
        if(err) res.send(err)
        Object.assign(book, req.body).save((err, book) =>{
            if(err) res.send(err)
            //res.json({message:'book added', book})
        })
    })
})
bookRouter.delete('/:id', (req, res) =>{
    Book.findById({_id:req.params.id}, (err, book) => {
        if(err) res.send(err)
        book.remove({_id:req.params.id}, (err, book) => {
            if(err) res.send(err)
            res.send('book removed')
        })
    })
})

//////////////////////render pages/////////////////////////////////





export { bookRouter }