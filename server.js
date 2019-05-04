const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const db = require("./models");

// Middleware

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Static Assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Routes (API and View)
app.use(routes);

// Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");

// Checkmark Submit Post Route
app.post("/submit", function(req, res){
    var book = new Book(req.body);
    
    db.Book.create(book).then(function(dbBook){
        res.json(dbBook);
    }).catch(function(err){
        res.json(err);
    });

})


// Initiate API Server
app.listen(PORT, function() {
    console.log(`The API Server is now Functional on Port ${PORT}.`);
});