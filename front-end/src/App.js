import logo from "./assets/logo.svg";
import "./App.css";


var jsonData = {
    "users": [
        {
            "name": "alan", 
            "age": 23,
            "username": "aturing"
        },
        {
            "name": "john", 
            "age": 29,
            "username": "__john__"
        }
    ]
  }





function handleClick() {
    
    // Send data to the backend via POST
    fetch('http://------------:8080/', {  // Enter your IP address here

      method: 'POST', 
      mode: 'cors', 
      body: 'JSON.stringify(jsonData)',// body data type must match "Content-Type" header

    })
    
  }

function App() {
    return (
        <div className="App">
          <header className="App-header">
            <ul>
              <li><img
                  src={logo}
                  className="App-logo"
                  alt="logo" /></li>

            </ul>
                <p>Report Web Application</p>
                <form
                    action="http://localhost:8080"
                    method="post"
                    className="form">
                    <button type="submit">
                        Connected?
                    </button>
                </form>
                <form
                    action="http://localhost:8080"
                    method="post"
                    className="form">
                </form>
            </header>
        </div>
    );
}

export default App;