//Node Server
import express from 'express';
//Allows for cross site API requests
import cors from 'cors'
//Add basic SQL features for MySQL
import mysql from 'mysql2/promise';
//Dotenv add environment variables, not in use currently
import "dotenv/config.js";
//Parses POST requests for JSON
import bodyParser from 'body-parser';


//Connect to database, replace with your own .env file if needed
var prod_database = await mysql.createConnection({
    host: "db",                 //Set name of network host
    user: "root",               //Set username, in this case root
    password: "default_pass",   //Set password
    database: "prod_database"     //Set Database Name
}) 


//Start Database
prod_database.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

//Queries database for the entire table specified in createConnection()
async function queryDatabase() {
    //Results will store and return the query, default to -1 for testing
    var results = -1;

    try{     
        //Get all rows from table
        results = await prod_database.query(
            'SELECT * FROM `reportList`;');   
    }
    //If there's an error, log it to console. 
    catch (err) {
        console.log(err);
    }

    return results; 
}


/**
 * 
 * @param {*Object} reportLine
 * @returns 
 */
//postDatabase takes an object posted from the React frontend and adds it to the MySQL database through a insert query
async function postDatabase(reportLine){
    
    //If empty object, just exit function
    /*if(reportLine.keys.length === 0){
        return -1;
    }*/

    //Extract properties of the POST request
    var date = reportLine.date;
    var information = reportLine.information; 
    var user = reportLine.user; 

    

    //Insert values into MySQL 
    try{
        results = await prod_database.query(
            `INSERT INTO reportList VALUES ('${date}', '${information}',  '${user}');`
        );
    }
    catch (err){
        console.log(err);
    }

    
};

//Now start the server
const app = express();
//Use cors for cross site access
app.use(cors({}));
//Use JSON body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//If you send an http post request. 
app.post("/api/posts", (req, res) => {
    //Print body
    console.log(req.body);

    //Clean Data

    //Send data to MySQL server
    postDatabase(req.body);

    //Refresh page
    res.redirect("http://localhost:3000");
});

//If you send an http get request...
app.get("/", (req, res) => {

    //Clean the response (if needed)

    //Send the table. 
    queryDatabase()
     .then((data) => res.send(data[0]));
});


//Assign port
const PORT = process.env.PORT || 8080;

//Start listening on port
app.listen(PORT,
    console.log(`Server started on port ${PORT}`)
);