import { Route, Link, Switch, BrowserRouter, HashRouter } from "react-router-dom";


function Test() {
  return <div>test</div>
}

function App() {
  return (
    <div>
      <h1>common app</h1>
      <BrowserRouter>
        {/* <Route path="/test" component={Test} ></Route> */}
        <ul>
          <li>
            <Link to="react-1"> React app</Link>
          </li>
          <li>
            <Link to="/react-2"> React app2</Link>
          </li>
          {/* <li>
            <Link to="/test"> test</Link>
          </li> */}
        </ul>
      </BrowserRouter>
    </div>
  );
}

export default App;
