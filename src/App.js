import { Route, Routes } from "react-router-dom";
import Articles from "./pages/articles-page";
import Home from "./pages/home-page";
import Portafolio from "./pages/portafolio-page";
import { Navbar } from "./components/navbar/Navbar";
import styled from "@emotion/styled";
import { useAuth } from "./context/auth-context";
import { ColorStyle } from "./styles/colors";
import Footer from "./components/footer";
import { useRef } from "react";
import Contact from "./pages/contact-page";
import { Article1 } from "./articles/selenium-web-scrapping";
import { Article2 } from "./articles/threejs-react";
import { Canvas } from "@react-three/fiber";
import Box from "./components/three-components/box";
import NavbarRes from "./components/navbar/navbar-responsive";
const Wrapper = styled.div`
  max-width: 1000px;
  margin:auto;
`
const Back = styled.div`
  position:absolute;
  width:100%;
  height:100%;
  display: flex;
  justify-content:center;
  align-items:center;
  // background:aqua;
  top:0px;
  left:0px;
  right:0px;
  bottom:0px;
  z-index:-1;
`
const Main = styled.div`
  position: relative;
  z-index:0;
`

function App() {
  const {dark} = useAuth();
  const bottomRef = useRef(null);
  const boxes=[];
  // -4 < y <4
  const maxy = 4;
  const maxx = 5;
  
  for (let i = 0; i <= 6; i++) {
    boxes.push(<Box key={i} position={[(Math.random()*2-1)*maxx, (Math.random()*2-1)*maxy, 0]} />);
  }
  
  const handleNavbarClick = () => {
    bottomRef.current.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <div style={{background:ColorStyle(dark).mainBackground}}>
      <Navbar onClick={handleNavbarClick}/>
      {/* <NavbarRes/> */}
      <Main>
        <Back>
          <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            {boxes}
            {/* <Box position={[-1.2, 0, 0]} color={"blue"}/>
            <Box position={[2, 1.2, -2]} color={"red"} /> */}
          </Canvas>
        </Back>
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
      </Main>
      <Footer/>
    </div>
    
  );
}

export default App;
