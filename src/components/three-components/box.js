import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Box(props, {color, args}) {
  const mesh = useRef();
  useFrame((state, delta) => {
    mesh.current.rotation.y += delta
    // mesh.current.position.x += delta 
  }
  
  )
  
  return (
    <mesh
      ref={mesh}
      rotation={[Math.PI / 2, Math.PI / 2, 0]}
      {...props}
    >
      <boxBufferGeometry attach="geometry" args={args}/>
      <lineBasicMaterial attach="material" color={color} />
    </mesh>
  );
}