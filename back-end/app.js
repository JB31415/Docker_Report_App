import express from 'express';
import cors from 'cors'
import mysql from 'mysql2/promise';
import "dotenv/config.js";


//Create connection to database, replace with your own .env file
var test_database = await mysql.createConnection({
    host: "db",    //Set name of network host
    user: "root",         //Set username, in this case root
    password: "default_pass", //Set password
    database: "placeholder"
}) 


//Connect to Database
test_database.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

//Query the database
async function queryDatabase() {

    //Results will store and return the query, default to -1 for testing
    var results = -1
    try{     
        //Get all rows from table
        results = await test_database.query(
        'SELECT * FROM `test_table`'
    )   
    }
    //If there's an error, log it to console. 
    catch (err) {
        console.log(err);
    }

    //Returns the result of the query. 
    return results;
    

}

//Now start the server
const app = express();
app.use(cors())


//If you send an http post request. 
app.post("/", (req, res) => {
    console.log("Connected to React");
    res.redirect("localhost:3000");
});

//If you send an http get request.
app.get("/", (req, res) => {
    
    //Sends the results of the database query
    res.send(queryDatabase());
    
})

const PORT = process.env.PORT || 8080;

app.listen(PORT,
    console.log(`Server started on port ${PORT}`)
);