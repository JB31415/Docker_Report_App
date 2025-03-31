import React from "react";

export function ReportList({dataArray = []}) {
    
    //Default array when no data array passed to function
    const defaultArray = [
        {name: "Jim", id: 101,}, 
        {name: "Henry", id: 102}
    ];

    //If passed dataArray is empty, set to default array
    if (dataArray.length === 0){
        dataArray = defaultArray; 
    }
    
    return(
        //Map each element of defaultArray called line to a ReportLine construction function while passing the data. 
        defaultArray.map(line => <ReportLine key = {line.name} name = {line.name} id = {line.id} /> 
        
        )

    );
}

//This component represents an individual line in the ReportList component
export function ReportLine({name, id}){

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


    return (
        <div>
            <ul style = {ulStyle}>
                <li style = {liStyle}>Name: {name}</li>
                <li style = {liStyle}>ID: {id}</li>
            </ul>
        </div>
    );

}