import Sidebar from "./Components/sidebar/Sidebar";
import TopBar from "./Components/TopBar/topbar";
import "./App.css";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className="App">
      <TopBar />
      <div className="container">
        <Sidebar />
        <Home />
      </div>
    </div>
  );
}

export default App;
