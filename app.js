const express = require('express'); //importing Express
const path = require("path"); //importing path module

//schema
const schema = require("./models/subscribers"); //this will  import Subscribers model
const app = express(); //creates Express

//using middleware
app.use(express.json()); //middleware to parse JSON data
app.use(express.urlencoded({ extended: false }));  //middleware for parsing incoming url-encoded data

//HOME PAGE routing using "/" 
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/index.html")); //this will route to "index.html" as home page
})


//route to get array of subscribers
app.get("/subscribers", async (req, res, next) => {
    try {
        let subscribers = await schema.find(); //for fetching all the subscribers from schema
        res.status(200).json(subscribers); //sends subscribers as a JSON with OK response 
    } catch (err) {
        res.status(400); //if caught error then sends the error response with 400
        next(err);
    }
});

//route to get array of subscribers with two fields "name" and "subscribedChannel"
app.get("/subscribers/names", async (req, res, next) => {
    try {
        let subscribers = await schema.find(
            {},
            { _id: 0, name: 1, subscribedChannel: 1 }
        );  //fetches subscribers only with fields "name" and "subscribedChannel"

        res.status(200).json(subscribers); //sends subscribers as a JSON with OK response
    } catch (err) {
        res.status(400); //if caught error then sends the error response with 400
        next(err);
    }
});

//route to get subscriber with id
app.get("/subscribers/:id", async (req, res) => {
    try {
        let id = req.params.id; //extracts value of id param from URL
        if (!id) {
            res.status(400).json({ message: "Invalid ID entered" }); //if caught error then sends the error response with 400 and displays a message as "Invalid ID entered"
            return;
        } let subscriber = await schema.findById(id); //retrives a document from MongoDB database based on the provided Id
        if (!subscriber) {
            res.status(400).json({ message: "Subscriber you entered could not found" });
            return;
            //if subscriber not found then send the status 400 with a message
        } res.send(subscriber);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

//error message for invalid routes
app.use((req, res) => {
    res.status(404).json({ message: "Oops! Route Not Found" });
}); //sends JSON response with 404 not found with error message

module.exports = app; //exports Express application























module.exports = app;
