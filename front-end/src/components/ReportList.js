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
        //Map each element of data called line to a ReportLine construction function while passing the data. 
        data.map(line => <ReportLine key = {line.name} name = {line.name} id = {line.ID} /> 
        )

    );
}



//This component represents an individual line in the ReportList component
export function ReportLine({name, id}){

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
                <li style = {liStyle}>Name: {name}</li>
                <li style = {liStyle}>ID: {id}</li>
            </ul>
        </div>
    );

}

