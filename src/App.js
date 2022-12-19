import { Link, Route, Routes } from "react-router-dom";
import Articles from "./pages/articles-page";
import Home from "./pages/home-page";
import Portafolio from "./pages/portafolio-page";

const Navigation = () => (
  <nav>
    <Link to="/">Home | </Link>
    <Link to="/articles">Articles | </Link>
    <Link to="/portafolio">Portafolio </Link>
  </nav>
);

function App() {
  return (
    <>
        <Navigation/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/portafolio" element={<Portafolio />} />
      </Routes>
    </>
    
  );
}

export default App;
