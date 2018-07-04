require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("multer");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongoose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_volleyball__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_volleyball___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_volleyball__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_dotenv_config__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_dotenv_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_dotenv_config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routes_routes__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_path__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_multer__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_multer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_multer__);



const { PORT } = process.env;




const upload = __WEBPACK_IMPORTED_MODULE_6_multer___default()({ dest: 'public/uploads' }); //do i need the parentheses?


//const PORT = process.env.PORT ||4567
__WEBPACK_IMPORTED_MODULE_1_mongoose___default.a.connect('mongodb://localhost/bookstore_dbs');
const db = __WEBPACK_IMPORTED_MODULE_1_mongoose___default.a.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log(`[MongoDB] connected`);
});

const app = __WEBPACK_IMPORTED_MODULE_0_express___default()();
app.use(__WEBPACK_IMPORTED_MODULE_2_volleyball___default.a);
app.use(__WEBPACK_IMPORTED_MODULE_0_express___default.a.json());
app.use(__WEBPACK_IMPORTED_MODULE_0_express___default.a.urlencoded({ extended: true }));
app.use(__WEBPACK_IMPORTED_MODULE_0_express___default.a.static('public')); //this allows younot to write all of the path in the pug
app.use('/', __WEBPACK_IMPORTED_MODULE_4__routes_routes__["a" /* bookRouter */]);
//view for pug
app.set('views', __WEBPACK_IMPORTED_MODULE_5_path___default.a.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.listen(PORT);
console.log(`i'm working on port ${PORT}`);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, "src"))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("volleyball");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("dotenv/config");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return bookRouter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_book__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_multer__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_multer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_multer__);

const bookRouter = __WEBPACK_IMPORTED_MODULE_0_express___default.a.Router();


const upload = __WEBPACK_IMPORTED_MODULE_2_multer___default()({ dest: 'public/uploads' });

bookRouter.get('/', (req, res) => {
    __WEBPACK_IMPORTED_MODULE_1__models_book__["a" /* Book */].find({}, (err, books) => {
        if (err) res.send(err);
        // res.json(books)
        res.render('index', { books }); // pre Ecma6 {books:books}
    });
});

bookRouter.get('/mybook', (req, res) => {
    res.render('newbook');
});

bookRouter.post('/add', upload.single('cover'), //name of photo in model
(req, res) => {
    const addBook = new __WEBPACK_IMPORTED_MODULE_1__models_book__["a" /* Book */](req.body);
    if (req.file) {
        addBook.cover = req.file.filename; //the new instance of the book plus the name of the model
    } else {
        addBook.cover = "image not available";
    }

    addBook.save((err, book) => {
        if (err) res.send(err);
        //res.json(book)
        res.redirect('/');
    });
});

bookRouter.get('/:id', (req, res) => {
    __WEBPACK_IMPORTED_MODULE_1__models_book__["a" /* Book */].findById(req.params.id, (err, book) => {
        if (err) res.send(err);
        //res.json(book) 
        res.render('detail_book', { book });
    });
});

bookRouter.put('/:id', (req, res) => {
    __WEBPACK_IMPORTED_MODULE_1__models_book__["a" /* Book */].findById({ _id: req.params.id }, (err, book) => {
        if (err) res.send(err);
        Object.assign(book, req.body).save((err, book) => {
            if (err) res.send(err);
            //res.json({message:'book added', book})
        });
    });
});
bookRouter.delete('/:id', (req, res) => {
    __WEBPACK_IMPORTED_MODULE_1__models_book__["a" /* Book */].findById({ _id: req.params.id }, (err, book) => {
        if (err) res.send(err);
        book.remove({ _id: req.params.id }, (err, book) => {
            if (err) res.send(err);
            res.send('book removed');
        });
    });
});

//////////////////////render pages/////////////////////////////////




/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Book; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);

const Schema = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema;

const bookSchema = new Schema({
    title: { type: String, index: true },
    author: { type: String, index: true },
    editor: String,
    price: Number,
    pages: Number,
    cover: String
});

const Book = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model('Book', bookSchema);


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ })
/******/ ]);
//# sourceMappingURL=main.map