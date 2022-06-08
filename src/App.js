import "./App.css";
import Main from "./Component/Main.jsx";
import { BrowserRouter } from "react-router-dom";
import {useRoutes} from "./routes";


function App() {
  const routes = useRoutes();
  return (
    <div className="App">
      <BrowserRouter>
        <Main />
        { routes }
      </BrowserRouter>
    </div>
  );
}

export default App;
