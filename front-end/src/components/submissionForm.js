import React, { useState} from "react";



export function SubmissionForm(){

    const [form, setForm] = useState({date: '', information: '', user: ''});


    const handleSubmit = (event) => {
        //Prevent refresh of page
        event.preventDefault(); 
        console.log(JSON.stringify(form));

        //Define the format of the post request
        const requestOptions = {
            method: 'POST', 
            
            headers: {"Content-Type": 'application/json'},
            body: JSON.stringify(form),
        };
        
        fetch('http://localhost:8080/api/posts', requestOptions);
        
    }

    const handleChange = (field) => {
        setForm({...form, [field.target.name]: field.target.value});
    };

    return(
        <form onSubmit = {handleSubmit}>
                        <div><label>Date of Report</label></div>
                        <input
                            type="date"
                            name="date"
                            placeholder="Date"
                            value = {form.date}
                            onChange={handleChange}
                        ></input>

                        <div><label>Information</label></div>
                        <input
                            type="text"
                            name="information"
                            placeholder="Information"
                            value = {form.information}
                            onChange={handleChange}
                        ></input>

                        <div><label>User</label></div>
                        <input
                            type="text"
                            name="user"
                            placeholder="User"
                            value={form.user}
                            onChange={handleChange}
                        ></input>

                        <div><button
                            type = "submit" 
                            >Submit</button></div>
        
                </form>
    )
}

