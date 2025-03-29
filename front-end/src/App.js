import logo from "./assets/logo.svg";
import "./App.css";
import {SubmissionForm} from "./components/submissionForm.js"; 


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
                </form>
                <SubmissionForm />
                
            </header>
            
        </div>
    );
}

export default App;