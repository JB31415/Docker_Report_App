import logo from "./assets/logo.svg";
import "./App.css";

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
                    action="../../post"
                    method="post"
                    className="form">
                    <button type="submit">
                        Connected?
                    </button>
                </form>
            </header>
        </div>
    );
}

export default App;