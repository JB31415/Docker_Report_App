import logo from "./assets/logo.svg";
import "./App.css";
import {SubmissionForm} from "./components/submissionForm.js"; 
import { ReportList } from "./components/ReportList.js";

function App() {
    return (
        <div className="App">
          <header className="App-header">
            <ul id = "navBar">
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

                <ReportList/>
                
            </header>
            
        </div>
    );
}

export default App;