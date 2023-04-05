import { Route, Routes } from "react-router-dom";
import Articles from "./pages/articles-page";
import Home from "./pages/home-page";
import Portafolio from "./pages/portafolio-page";
import { Navbar } from "./Navbar";
import styled from "@emotion/styled";
import { useAuth } from "./context/auth-context";
import { ColorStyle } from "./styles/colors";
import Footer from "./components/footer";
import { useRef } from "react";
import Contact from "./pages/contact-page";
import { Article1 } from "./articles/selenium-web-scrapping";
import { Article2 } from "./articles/threejs-react";

const Wrapper = styled.div`
  max-width: 1000px;
  margin:auto;
  
`


function App() {
  const {dark} = useAuth();
  const bottomRef = useRef(null);
  
  const handleNavbarClick = () => {
    bottomRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={{background:ColorStyle(dark).mainBackground}}>
      <Navbar onClick={handleNavbarClick}/>
      <Wrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/portafolio" element={<Portafolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/articles/selenium-for-web-scrapping" element={<Article1 />} />
            <Route path="/articles/threejs-in-react" element={<Article2 />} />
          </Routes>
      </Wrapper>
      <Footer/>
    </div>
    
  );
}

export default App;
