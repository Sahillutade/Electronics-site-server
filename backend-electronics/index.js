const cors = require("cors");
const express = require("express");
const mongoClient = require("mongodb").MongoClient;
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Create connection string and app

const port = process.env.PORT;
const conString = process.env.MONGO_URL;

const app = express();
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// Create API end points

app.get('/users',(req, res) => {
    mongoClient.connect(conString).then(clientObject => {
        var database = clientObject.db("electronics");
        database.collection("login").find({}).toArray().then(documents => {
            res.send(documents);
            res.end();
        });
    });
});

app.get('/featured-products',(req, res) => {
    mongoClient.connect(conString).then(clientObject => {
        var database = clientObject.db("electronics");
        database.collection("products").find({$and:[{'id':{$gte:1}},{'id':{$lte:8}}]}).toArray().then(documents => {
            res.send(documents);
            res.end();
        });
    });
});

app.get('/products',(req, res) => {
    mongoClient.connect(conString).then(clientObject => {
        var database = clientObject.db("electronics");
        database.collection("products").find({}).toArray().then(documents => {
            res.send(documents);
            res.end();
        });
    });
});

app.get('/new-products',(req, res) => {
    mongoClient.connect(conString).then(clientObject => {
        var database = clientObject.db("electronics");
        database.collection("products").find({$and:[{'id':{$gte:11}},{'id':{$lte:20}}]}).toArray().then(documents => {
            res.send(documents);
            res.end();
        });
    });
});

app.get('/product-details/:id',(req, res) => {
    var id = parseInt(req.params.id);

    mongoClient.connect(conString).then(clientObject => {
        var database = clientObject.db("electronics");
        database.collection("products").findOne({id:id}).then(document => {
            res.send(document);
            res.end();
        });
    });
});

app.post('/register-user',(req, res) => {
    var user = {
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        mobile: req.body.mobile
    };

    mongoClient.connect(conString).then(clientObject => {
        var database = clientObject.db("electronics");
        database.collection("login").insertOne(user).then(() => {
            console.log('User Registered');
            res.send();
        });
    });
});

app.listen(port);
console.log(`Server Started http://127.0.0.1:${port}`);