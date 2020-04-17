if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const usersRouter = require("./routes/users");
const passport = require("passport");
const flash = require("express-flash")
const session = require("express-session")
const db = require("./dbConnectors/usersDbConnector");


const initializePassport = require("../passport-config");
initializePassport(passport, 
    username => db.getUserByUsername(username),
    id => db.getUserById(id)
);

const path = require("path");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(flash());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false

}))

app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(__dirname + '/public'));

app.use("/users", usersRouter);

app.all("/*", (req, res) => {
    res.sendFile(path.join(__dirname+"/routes/manual.html"));
});


app.listen(8080, () => console.log("server listening on port 8080"));

module.exports = app;