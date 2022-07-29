// middle man
const express = require("express");
const mysql = require("mysql");
// brings back data in a way you can understand
const cors = require("cors");


// Now we can use express as a variable 
const app = express();

// This will make it so we pull the variables created in the .env file and
require("dotenv").config()

// create connection can time out when you don't use it, and you'll have to manually restart it
const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
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
app.get("/api/products", (req, res) => {

    // How we query
    pool.query("SELECT * FROM product_info", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

// Port is runnning
// If the port is defined in the enviornment it's hosted then use that, if not and running locally use the indicated port 3001
app.listen(process.env.PORT || 3001, () => {
    console.log(`The server listening on port 3001`);
});

