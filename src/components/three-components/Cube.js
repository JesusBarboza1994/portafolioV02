import * as THREE from 'three'
function Cube(pos = {x:0}){
  const cube = new THREE.Mesh(
    new THREE.BoxBufferGeometry(1,1,1),
    new THREE.MeshBasicMaterial({
      color: 0xff0000,
      transparent: true,
      opacity: 0.3,
      wireframe:true
    }))
  cube.position.x = pos.x
  return cube;
}

export default Cube;
