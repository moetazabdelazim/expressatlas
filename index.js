const port = 3000,
    express = require ("express"),
    app = express();
    bookcontroller = require("./controllers/bookcontroller.js");
    layouts = require("express-ejs-layouts");
app.set("view engine", "ejs")
app.use(layouts);
app.use(express.static("public"));
app.use(
    express.urlencoded({
        extended: false
    })
);
app.use(express.json());
app.use((req,res,next) => {
    console.log(`request made to ${req.url}`);
    next();
});

app
    .get("/home", (req, res) => {
        res.render("home");
    })
    .get("/books/:book", bookcontroller.sendReqParam,
    (req, res, next) => {
        console.log(req.data);
        res.render("books", { result: req.data });
    })
    .listen(port, () => {
        console.log(`started listneing on ${port}`)
    });


const mongoose = require("mongoose");

mongoose.connect(
    "mongodb+srv://moetaz:Password@srt-521.dvuk1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {useUnifiedTopology: true}
);

const db = mongoose.connection;

db.once("open", () => {
    console.log("mongodb connection");
});

const books = require("./models/book");
var myQuery = books.findOne({'hid':'3'});
myQuery.exec((error, data) => {
    if (data) console.log(data);
});