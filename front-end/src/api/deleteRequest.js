
//Delete request takes a Javascript object and then sends an HTTP DELETE request to the backend API. 
export async function deleteRequest(listObjectJSON){

    //Reusable options define request
    const requestOptions = {
        method: 'DELETE', 
        headers: {"Content-Type": 'application/json'},
        body: JSON.stringify(listObjectJSON),
    };

    //Collect response 
    var response = await fetch('http://localhost:8080/api/delete', requestOptions)

    //TODO: Decode response 


    //If all good, return 0 exit code
    if (response.status === 200)
        return 0;
    //Else, return unsuccessful             TODO update these to handle more possibilities. 
    else 
        return 1; 
    

};