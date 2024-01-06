import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry1 = new THREE.TetrahedronGeometry(1, 0);
const material1 = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const tetra = new THREE.Mesh(geometry1, material1);

const geometry2 = new THREE.BoxGeometry(3, 2, 1);
const material2 = new THREE.MeshBasicMaterial({ color: 0x0000ff });
const cube = new THREE.Mesh(geometry2, material2);

const geometry3 = new THREE.CapsuleGeometry(1, 0.1, 5, 25);
const material3 = new THREE.MeshBasicMaterial({ color: 0x008000 });
const capsule = new THREE.Mesh(geometry3, material3);

const geometry4 = new THREE.ConeGeometry(1, 5, 32);
const material4 = new THREE.MeshBasicMaterial({ color: 0xffff00 });
const cone = new THREE.Mesh(geometry4, material4);

const geometry5 = new THREE.DodecahedronGeometry(1, 0);
const material5 = new THREE.MeshBasicMaterial({ color: 0x008000 });
const dode = new THREE.Mesh(geometry5, material5);

scene.add(tetra);
tetra.position.x = -8;

scene.add(cube);
cube.position.x = -4;

scene.add(capsule);
capsule.position.x = 0;

scene.add(cone);
cone.position.x = 4;

scene.add(dode);
dode.position.x = 8;

scene.background = new THREE.TextureLoader().load('public/justright.jpg');

camera.position.z = 10;
//renderer.render(scene, camera);
function animate() {
    requestAnimationFrame(animate);
    tetra.rotation.x += 0.01;
    tetra.rotation.y += 0.01;

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    capsule.rotation.x += 0.01;
    capsule.rotation.y += 0.01;

    cone.rotation.x += 0.01;
    cone.rotation.y += 0.01;

    dode.rotation.x += 0.01;
    dode.rotation.y += 0.01;

    // object.rotation.x += 0.01;
    // object.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();

