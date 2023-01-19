import Sidebar from "./Components/sidebar/Sidebar";
import TopBar from "./Components/TopBar/topbar";
import "./App.css";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/login";
import Single from "./Pages/Single/Single";
import New from "./Pages/New/New";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import List from "./Pages/Lists/list";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
          </Route>
          <Route path="lists">
            <Route index element={<List />} />
            <Route path=":userId" element={<Single />} />
            <Route path="new" element={<New />} />
          </Route>
          <Route path="products">
            <Route index element={<list />} />
            <Route path=":productId" element={<Single />} />
            <Route path="new" element={<New />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
