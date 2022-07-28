// middle man
const express = require("express");
const mysql = require("mysql");
// brings back data in a way you can understand
const cors = require("cors");


// Now we can use express as a variable 
const app = express();


// create connection can time out when you don't use it, and you'll have to manually restart it
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Cherub!4320",
    database: "coffee_store",
});

// telling express how we want the data to come back in a readable format 
app.use(cors());
app.use(express.json());


// app.get("/", (req, res) => {

//     // if (err) {
//     //     console.log(err)
//     // } else {


//     // Send this back 
//     res.send("Hello WOrld")



// })

// res is express's result
// result is mySql's result 
// api part is necessary, this is due to the fact that on react's end might have the same route name
app.get("/api/customers", (req, res) => {

    // How we query
    db.query("SELECT * FROM customers", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

  app.get("/api/products", (req, res) => {
    db.query("SELECT * FROM products", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

  app.get("/api/orders", (req, res) => {
    db.query("SELECT * FROM orders", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

// Port is runnning
app.listen(3001 || 3001, () => {
    console.log(`The server listening on port 3000`);
});

