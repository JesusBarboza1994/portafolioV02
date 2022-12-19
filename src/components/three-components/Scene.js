import { render } from '@testing-library/react'
import {useEffect, useRef} from 'react'
import * as THREE from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import Camera from './Camera'
import Cube from './Cube'

//Loading
const textureLoader = new THREE.TextureLoader()
const normalTexture = textureLoader.load('./components/three-components/NormalMap1.png')


const Scene = () => {
  const mountRef = useRef(null)

  useEffect(()=> {
    const currentMount = mountRef.current;
    const scene = new THREE.Scene()
    const camera = Camera(currentMount)
    scene.add(camera)
    const renderer = new THREE.WebGLRenderer({alpha: true, antialias: true});
    renderer.setSize(currentMount.clientWidth , currentMount.clientHeight);
    currentMount.appendChild(renderer.domElement);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);

    controls.enableDamping = true;
    // scene.add(Cube({x:10}));
    // scene.add(Cube({x:5}));
    // camera.position.z = 12;

    // Sphere
    // const geometry = new THREE.SphereGeometry(.5,64,64);
    const geometry = new THREE.BoxGeometry(3,3,3);
    const material = new THREE.MeshStandardMaterial();
    material.metalness = 0.7
    material.roughness = 0.2
    material.color = new THREE.Color(0x292929)
    // material.normalMap = normalTexture;
    const sphere = new THREE.Mesh( geometry, material );
    scene.add( sphere );
    sphere.position.x = 0

    // Lights
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.x = 1;
    pointLight.position.y = 0;
    pointLight.position.z = 4;
    scene.add(pointLight)

    // Render the scene
    const animate = () =>{
      // controls.update()
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }
    animate();

    // Clean up scene
    return ()=>{
      currentMount.removeChild(renderer.domElement);
    }
  }, [])
  return (
    <div
      className='contenedor3D'
      ref={mountRef}
      style = {{width:'100%', height:'100vh', position:"absolute", zIndex:-1}}
    >

    </div>
  )
}

export default Scene