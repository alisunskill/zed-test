import "./App.css";
import Zed from "./Zed";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ZedCards from "./users/ZedCards";
import ZedNavbar from "./header/ZedNavbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ZedNavbar />
        <Routes>
          <Route path="/" exact element={<Zed />} />
          <Route path="/allcards" exact element={<ZedCards />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
