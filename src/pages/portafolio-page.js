import { Box } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function Portafolio(){
  const width = 1;
  return(
    <div id="canvas-container">
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <mesh rotation={[0, 0, Math.PI / 4]} >
          <cylinderGeometry args={[width,width,4]}/>
          <meshStandardMaterial />
        </mesh>
      </Canvas>
    </div>
  )
}