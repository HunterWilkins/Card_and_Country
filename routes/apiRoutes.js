const axios = require("axios");
const router = require("express").Router();
const db = require("../models");



router.get("/books", (req, res) => {
    db.Book.find({}).then(function(response){
        console.log("This is what comes from the findAll route: " + response)
        res.json(response)
    }).catch(err => res.json(err));
});

router.get("/books/:title", (req, res) => {
    var title = req.params.title.replace(/\s+/g,"+");
    axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query +"&maxResults=5&key=AIzaSyC7x-WQXkZ5As0X7r9aOYa3OcNkEm4uZ0g").then(function(response){
        res.json(response.data);
        console.log(response);
    })
})

router.post("/books", (req, res) => {
    db.Book.create(req.body).then(response => res.json(response))
    .catch(err => res.json(err));
});

router.delete("/api/books/:id", (req, res) => {
    var id = req.params.id;
    db.Book.deleteOne({_id:id}).then(response=>{
        res.json(response)
    }).catch(err => res.json(err));
});

module.exports = router;
