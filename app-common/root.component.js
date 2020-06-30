import {
  Route,
  Link,
  Switch,
  BrowserRouter,
  HashRouter,
} from "react-router-dom";

function Test() {
  return <div>test</div>;
}

function App() {
  return (
    <div>
      <h1>common app</h1>
      <ul>
        <li>
          <a href="/react-1">react app1</a>
        </li>
        <li>
          <a href="/react-2">react app2</a>
        </li>
      </ul>
      {/* <BrowserRouter>
        <ul>
          <li>
            <Link to="react-1"> React app</Link>
          </li>
          <li>
            <Link to="/react-2"> React app2</Link>
          </li>
        </ul>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
