const express = require('express')
const dotenv = require('dotenv');
const bodyParser = require('body-parser')
const logger = require('morgan');
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const session = require('express-session');
const path = require('path');
const flash = require('connect-flash');
const cors = require('cors')


dotenv.config()

const app = express()

const indexRoute = require('./routes/index')
const category = require('./routes/category')
const project = require('./routes/projects')
const cart = require('./routes/cart')
// Set global errors variable
app.locals.errors = null;

// Get Category Model
const Category = require('./models/category');

// Get all categories to pass to header.ejs
Category.find(function (err, cats) {
    if (err) {
        console.log(err);
    } else {
        app.locals.cats = cats;
    }
});


// middleware -
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser())
app.use(cors())
app.use(flash());


mongoose.connect(process.env.DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify:false
     
  }).then(() =>{
      
      console.log('Database is connected')
    })


      
    app.use(session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: true,
       
      }))
        
     
    app.use(function (req, res, next) {
    res.locals.messages = require('express-messages')(req, res);
    next();
});


app.get('*', function(req,res,next) {
    res.locals.cart = req.session.cart;
    // res.locals.user = req.user || null;
    next();
 });

app.set("view engine", "ejs");
app.set("views", "views");
//app.use(express.static("public"));
app.use(express.static(path.join(__dirname, 'public')));




app.use('/', indexRoute)
app.use('/pizza', category)
app.use('/flavours', project)
app.use('/cart', cart)



 
const port = process.env.PORT || 7000;
app.listen(port, function(){
    console.log(
         `http://localhost:${port}`
      );
        
})