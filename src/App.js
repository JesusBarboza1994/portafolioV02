import { Route, Routes } from "react-router-dom";
import Articles from "./pages/articles-page";
import Home from "./pages/home-page";
import Portafolio from "./pages/portafolio-page";
import { Navbar } from "./Navbar";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  max-width: 1000px;
  margin:auto;
`


function App() {
  return (
    <Wrapper>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/portafolio" element={<Portafolio />} />
        </Routes>
    </Wrapper>
    
  );
}

export default App;
