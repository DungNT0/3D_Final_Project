import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

document.addEventListener("keydown", onKeyDown, false);
const ARROWLEFT = 37, ARROWRIGHT = 39, ARROWUP = 38, ARROWDOWN = 40,
    W_FORWARD = 87, S_BACKWARD = 83, SPACEBAR = 32;

const geometry1 = new THREE.TetrahedronGeometry(1, 0);
const material1 = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const tetra = new THREE.Mesh(geometry1, material1);
scene.add(tetra);
tetra.position.x = -8;

const geometry2 = new THREE.BoxGeometry(1, 1, 1);
const crate_texture = new THREE.TextureLoader().load('public/Diffuse_Texture.png');
const bump_map_texture = new THREE.TextureLoader().load('public/Bump_Texture.png');
const normal_texture = new THREE.TextureLoader().load('public/Normal_Texture.png');

const material2 = new THREE.MeshPhongMaterial({
    map: crate_texture,
    bumpMap: bump_map_texture,
    normalMap: normal_texture
});

const crate = new THREE.Mesh(geometry2, material2);
scene.add(crate);
crate.position.x = -4;

const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
scene.add(ambientLight);

const pointLight1 = new THREE.PointLight(0xffffff, 0.8, 100.0);
pointLight1.position.set(-3.1, 0.3, 1.5)
scene.add(pointLight1);

const geometry3 = new THREE.CapsuleGeometry(1, 0.1, 5, 25);
const material3 = new THREE.MeshBasicMaterial({ color: 0x008000 });
const capsule = new THREE.Mesh(geometry3, material3);
scene.add(capsule);
capsule.position.x = 0;

const geometry4 = new THREE.ConeGeometry(1, 5, 32);
const material4 = new THREE.MeshBasicMaterial({ color: 0xffff00 });
const cone = new THREE.Mesh(geometry4, material4);
scene.add(cone);
cone.position.x = 4;

const geometry5 = new THREE.DodecahedronGeometry(1, 0);
const material5 = new THREE.MeshBasicMaterial({ color: 0x008000 });
const dode = new THREE.Mesh(geometry5, material5);
scene.add(dode);
dode.position.x = 8;

// scene.background = new THREE.TextureLoader().load('public/justright.jpg');

const geometry6 = new THREE.BoxGeometry(32, 0.1, 32);
const grass_diffuse_texture = new THREE.TextureLoader().load('public/grass_diffus_texture.png');
const grass_normal_texture = new THREE.TextureLoader().load('public/grass_normal_texture.png');
const grass_disp_texture = new THREE.TextureLoader().load('public/grass_displacement_texture.png');
const grass_specular_texture = new THREE.TextureLoader().load('public/grass_specular_texture.png');
const material6 = new THREE.MeshPhongMaterial({
    map: grass_diffuse_texture,
    normalMap: grass_normal_texture,
    displacementMap: grass_disp_texture,
    specularMap: grass_specular_texture,
    specular: 0xffffff, shininess: 20
});

const ground = new THREE.Mesh(geometry6, material6);
ground.position.z = -3;
ground.position.y = -4;
ground.position.x = 0;
scene.add(ground);

const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 100);
camera.position.set(0, 0, 12);

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 0.5, 0);
controls.update();
controls.enablePan = false;
controls.enableDamping = true;

function animate() {
    requestAnimationFrame(animate);
    tetra.rotation.x += 0.01;
    tetra.rotation.y += 0.01;

    crate.rotation.x += 0.01;
    crate.rotation.y += 0.01;

    capsule.rotation.x += 0.01;
    capsule.rotation.y += 0.01;

    cone.rotation.x += 0.01;
    cone.rotation.y += 0.01;

    dode.rotation.x += 0.01;
    dode.rotation.y += 0.01;

    controls.update();

    renderer.render(scene, camera);
}
animate();

function onKeyDown(e) {
    console.log("The current key:" + e.keyCode);
    switch (e.keyCode) {
        case ARROWLEFT:
            tetra.position.x += -0.2;
            crate.position.x += -0.2;
            capsule.position.x += -0.2;
            cone.position.x += -0.2;
            dode.position.x += -0.2;
            break;

        case ARROWRIGHT:
            tetra.position.x += 0.2;
            crate.position.x += 0.2;
            capsule.position.x += 0.2;
            cone.position.x += 0.2;
            dode.position.x += 0.2;
            break;

        case ARROWUP:
            tetra.position.y += 0.2;
            crate.position.y += 0.2;
            capsule.position.y += 0.2;
            cone.position.y += 0.2;
            dode.position.y += 0.2;
            break;

        case ARROWDOWN:
            tetra.position.y += -0.2;
            crate.position.y += -0.2;
            capsule.position.y += -0.2;
            cone.position.y += -0.2;
            dode.position.y += -0.2;
            break;

        case W_FORWARD:
            tetra.position.z += 0.2;
            crate.position.z += 0.2;
            capsule.position.z += 0.2;
            cone.position.z += 0.2;
            dode.position.z += 0.2;
            break;

        case S_BACKWARD:
            tetra.position.z += -0.2;
            crate.position.z += -0.2;
            capsule.position.z += -0.2;
            cone.position.z += -0.2;
            dode.position.z += -0.2;
            break;

        case SPACEBAR:
            tetra.position.x = -8;
            tetra.position.y = 0;
            tetra.position.z = 0;

            crate.position.x = -4;
            crate.position.y = 0;
            crate.position.z = 0;

            capsule.position.x = 0;
            capsule.position.y = 0;
            capsule.position.z = 0;

            cone.position.x = 4;
            cone.position.y = 0;
            cone.position.z = 0;

            dode.position.x = 8;
            dode.position.y = 0;
            dode.position.z = 0;

            camera.position.set(0, 0, 12);
            break;

        default:
            console.log("The current key:" + e.keyCode);
    }
}

