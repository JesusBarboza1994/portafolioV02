import * as THREE from 'three'
function Camera(currentMount){
  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
  }
  const camera = new THREE.PerspectiveCamera(25, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000); 
  camera.position.x = 0;
  camera.position.y = 0;
  camera.position.z = 12;
  return camera;
}

export default Camera;