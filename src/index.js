import express from 'express'
import mongoose from 'mongoose'
import volleyball from 'volleyball'
const { PORT } = process.env;
import "dotenv/config";
import {bookRouter} from './routes/routes'
import path from 'path'
import multer from 'multer'
const upload = multer({dest: 'public/uploads' }) //do i need the parentheses?


//const PORT = process.env.PORT ||4567
mongoose.connect('mongodb://localhost/bookstore_dbs');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
 console.log(`[MongoDB] connected`);
})

const app = express()
app.use(volleyball)
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public')) //this allows younot to write all of the path in the pug
app.use('/', bookRouter)
//view for pug
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug')




app.listen(PORT);
console.log(`i'm working on port ${PORT}`)