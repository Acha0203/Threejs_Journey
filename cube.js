// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

init();
function init() {
  const width = window.innerWidth;
  const height = window.innerHeight;

  const renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(width, height);

  document.body.appendChild(renderer.domElement);

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
  camera.position.set(30, 30, 60);
  camera.lookAt(0, 0, 0);
  scene.add(camera);

  const boxGeo = new THREE.BoxGeometry(10, 10, 10);
  const boxMat = new THREE.MeshNormalMaterial();
  const box = new THREE.Mesh(boxGeo, boxMat);
  box.position.y = 15;
  scene.add(box);

  // const controls = new OrbitControls(camera, renderer.domElement);

  const animate = () => {
    requestAnimationFrame(animate);

    // controls.update();
    renderer.render(scene, camera);
  };
  animate();

  const planeGeo = new THREE.PlaneGeometry(1000, 1000, 50, 50);
  const planeMat = new THREE.MeshBasicMaterial({
    color: 0x333333,
    wireframe: true,
  });
  const plane = new THREE.Mesh(planeGeo, planeMat);
  plane.rotation.set(-Math.PI / 2, 0, 0);
  scene.add(plane);
}
