import { Route, Link, Switch, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>common app</h1>
      <BrowserRouter>
        <ul>
          <li>
            <Link to="react"> React app</Link>
          </li>
          <li>
            <Link to="/react2"> React app2</Link>
          </li>
        </ul>
      </BrowserRouter>
    </div>
  );
}

export default App;
