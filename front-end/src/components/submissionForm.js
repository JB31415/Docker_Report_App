import React, { useState} from "react";



export function SubmissionForm(){

    const [form, setForm] = useState({date: '', information: '', user: ''});


    const handleChange = (field) => {
        return (event) => {
            //... is the spread operator, it copies all the properties of form into a new object
            //and then we add the new property to that object.
            setForm({...form, [field]: event.target.value});
        };
    };

    return(
        <form onSubmit = {() => {}}>
                        <div><label>Date of Report</label></div>
                        <input
                            type="date"
                            name="date"
                            placeholder="Date"
                            onChange={handleChange}
                        ></input>

                        <div><label>Information</label></div>
                        <input
                            type="text"
                            name="information"
                            placeholder="Information"
                            onChange={handleChange}
                        ></input>

                        <div><label>User</label></div>
                        <input
                            type="text"
                            name="user"
                            placeholder="User"
                            onChange={handleChange}
                        ></input>

                        <div><input 
                            type = "submit" 
                            value = "Submit"></input></div>
        
                </form>
    )
}

