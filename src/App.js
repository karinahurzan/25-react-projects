import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar";
import Home from "./pages/home";
import Favourites from "./pages/favourites";
import Details from "./pages/detailes";

function App() {
  return (
    <div>
      <div className="min-h-screen p-6 bg-white text-gray-600 text-jg">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/recipe-item/:id" element={<Details />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
