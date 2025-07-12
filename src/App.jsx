import "./css/App.css";
import Favorites from "./Pages/Favourite";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import { MovieProvider } from "./Context/MovieContext";
import NavBar from "./NavBars/NavBar";

function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;