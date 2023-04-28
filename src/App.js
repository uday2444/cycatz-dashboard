// import Sidebar from "./Components/sidebar/Sidebar";
// import TopBar from "./Components/TopBar/topbar";
import "./App.css";
import Home from "./Pages/Home/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
