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

    //Return rows
    return results; 
}


/**
 * 
 * @param {*Object} reportLine
 * @returns 
 */
//postDatabase takes an object posted from the React frontend and adds it to the MySQL database through a insert query
async function postReport(reportLine){

    //Extract properties of the POST request
    var date = reportLine.date;
    var information = reportLine.information; 
    var user = reportLine.user; 

    //Insert values into MySQL 
    try{
        await prod_database.query(
            `INSERT INTO reportList VALUES ('${date}', '${information}',  '${user}');`
        );
    }
    catch (err){
        console.log(err);
    }

    
};

//Deletes row of a table given a javascript object representing it.
async function deleteReport(reportLine){

    //Get individual elements 
    var date = reportLine.date;
    var info = reportLine.info; 
    var user = reportLine.user; 

    //Cuts off the time component of the date. 
    date = date.substr(0, date.search("T"));

    try{
        //Query the table to delete based on individual elements
        await prod_database.query(
            `DELETE FROM reportList WHERE REPORT_DATE = "${date}" and INFO = '${info}' and USER = '${user}';`
        );
    }
    catch(err){
        console.log(err);
    }

};


//SERVER OPTIONS AND MIDDLEWARE

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

    //TODO: Clean Data

    //Send data to MySQL server
    postReport(req.body);

    //Refresh page
    res.redirect("http://localhost:3000");
});



//If you send an http get request to root ...
app.get("/", (req, res) => {


    //TODO: Clean the response

    //Send the table. 
    queryDatabase()
     .then((data) => res.send(data[0]));
});

//If you get an httpy delete request at /api/delete
app.delete("/api/delete", (req, res) => {
    
    //Print delete request body, should contain the information
    console.log(req.body);

    //TODO: Verify and clean Data


    //Query the table to delete row
    deleteReport(req.body);

    //Refresh page
    res.redirect("http://localhost:3000");

}); 


//Assign port
const PORT = process.env.PORT || 8080;

//Start listening on port
app.listen(PORT,
    console.log(`Server started on port ${PORT}`)
);