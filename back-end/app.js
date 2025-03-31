import express from 'express';
import cors from 'cors'
import mysql from 'mysql2/promise';
import "dotenv/config.js";
import bodyParser from 'body-parser';


//Connect to database, replace with your own .env file
var test_database = await mysql.createConnection({
    host: "db",    //Set name of network host
    user: "root",         //Set username, in this case root
    password: "default_pass", //Set password
    database: "placeholder"
}) 


//Start Database
test_database.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });


var result = "default value"; 

//Query the database
try{
    const [results] = await test_database.query(
        'SELECT * FROM `test_table`'
    );

    result = results;

} catch (err) {
    console.log(err);
}


//Now start the server
const app = express();
app.use(cors({}));

//Use JSON body parser middleware
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


//If you send an http post request. 
app.post("/api/posts", (req, res) => {
    //Print body
    console.log(req.body);
    res.redirect("http://localhost:3000");
});

//If you send an http get request.
app.get("/", (req, res) => {
    res.send(result);
})

const PORT = process.env.PORT || 8080;

app.listen(PORT,
    console.log(`Server started on port ${PORT}`)
);