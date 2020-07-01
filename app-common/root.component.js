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

  var handleLink = function handleLink(type) {
    switch (type) {
      case "app1":
        history.pushState(null, null, "/react-1");
        break;
      case "app2":
        history.pushState(null, null, "/react-2");
        break;
    }
  }

  return (
    <div>
      <h1>common app</h1>
      <ul>
        <li>
          <a href="javascript:void(0);" onClick={() => handleLink('app1')} >react app1</a>
        </li>
        <li>
          <a href="javascript:void(0);" onClick={() => handleLink('app2')} >react app2</a>
        </li>
      </ul>
    </div>
  );
}

export default App;
