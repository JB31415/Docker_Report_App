import React from "react";
import {useState, useEffect} from 'react';

//Creates a list of various ReportLine components representing every report in a MySQL database
export function ReportList() {
    
    //State variables
    const [data, setData] = useState([]);

    //Fetch the updated response from the API 
    //Note, useEffect() is supposed to have an array of variables as an argument that when updated, will call fetch to update the state. 
    //I have not implemented this part yet but it is on my to-do list. 
    useEffect(() => {
        //Fetch data from API
        fetch('http://localhost:8080')
            //Turn data into object
            .then(response => response.json())
            //Update the state of component
            .then(json => {
                setData(json);
            });
    }, []);
    return(
        //May want to change key to something other than Index for performance reasons
        //Map each element of data called line to a ReportLine construction function while passing the data. 
        data.map(line => <ReportLine key = {line.index} date = {line.REPORT_DATE} info = {line.INFO} user = {line.USER} /> 
        )

    );
}



//This component represents an individual line in the ReportList component
export function ReportLine({date, info, user}){

    //Styles
    const ulStyle = {
        backgroundColor: "blue", 
        borderStyle: "solid",
        borderWidth: "5px"
        
        
    }
    const liStyle = {
        border: "20px black",
        padding: "10px",
        
        display: "inline",
    }


    //Return the HTML lists
    return (
        <div>
            <ul style = {ulStyle}>
                <li style = {liStyle}>Date: {date}</li>
                <li style = {liStyle}>Info: {info}</li>
                <li style = {liStyle}>User: {user}</li>
            </ul>
        </div>
    );

}

