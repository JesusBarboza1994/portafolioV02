import { Route, Routes } from "react-router-dom";
import Articles from "./pages/articles-page";
import Home from "./pages/home-page";
import Portafolio from "./pages/portafolio-page";
import { Navbar } from "./Navbar";
import styled from "@emotion/styled";
import { useAuth } from "./context/auth-context";
import { ColorStyle } from "./styles/colors";
import Footer from "./components/footer";

const Wrapper = styled.div`
  max-width: 1000px;
  margin:auto;
  
`


function App() {
  const {dark} = useAuth();
  return (
    <div style={{background:ColorStyle(dark).mainBackground}}>
      <Navbar/>
      <Wrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/portafolio" element={<Portafolio />} />
          </Routes>
      </Wrapper>
      <Footer/>
    </div>
    
  );
}

export default App;
