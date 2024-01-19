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

const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
scene.add(ambientLight);

const pointLight1 = new THREE.PointLight(0xffffff, 0.8, 100.0);
pointLight1.position.set(-3.1, 0.3, 315);
scene.add(pointLight1);

const geometry1 = new THREE.SphereGeometry(1, 64, 32);
const material1 = new THREE.MeshBasicMaterial({ color: 0x4bb6d1 });
const orb = new THREE.Mesh(geometry1, material1);
orb.position.z = 315;
scene.add(orb);

const geometry2 = new THREE.CylinderGeometry(1, 5, 2, 64);
const material2 = new THREE.MeshBasicMaterial({ color: 0xdeddd3 });
const ufo_top = new THREE.Mesh(geometry2, material2);
ufo_top.position.z = 315;
ufo_top.position.y = -1;
scene.add(ufo_top);

const geometry3 = new THREE.CylinderGeometry(5, 1, 1, 64);
const material3 = new THREE.MeshBasicMaterial({ color: 0xdeddd3 });
const ufo_bottom = new THREE.Mesh(geometry3, material3);
ufo_bottom.position.z = 315;
ufo_bottom.position.y = -2.5;
scene.add(ufo_bottom);

const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 100);
camera.position.set(0, 0, 340);

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 0, 315);
controls.update();
controls.enablePan = false;
controls.enableDamping = true;

const geometry4 = new THREE.SphereGeometry(300, 300, 300);
const loader = new THREE.CubeTextureLoader();
loader.setPath('public/skybox/');
const texture_cube = loader.load([
    'space_ft.png', 'space_bk.png', 'space_up.png',
    'space_dn.png', 'space_rt.png', 'space_lf.png'
]);
const material4 = new THREE.MeshBasicMaterial({ color: 0xffffff, envMap: texture_cube });
const sphere = new THREE.Mesh(geometry4, material4);
scene.add(sphere);

const geometry5 = new THREE.SphereGeometry(300, 300, 300);
const loader2 = new THREE.CubeTextureLoader();
loader2.setPath('public/skybox/');
const texture_cube2 = loader2.load([
    'space_ft.png', 'space_bk.png', 'space_up.png',
    'space_dn.png', 'space_rt.png', 'space_lf.png'
]);
const material5 = new THREE.MeshBasicMaterial({ color: 0xffffff, envMap: texture_cube2 });
const sphere2 = new THREE.Mesh(geometry5, material5);
scene.add(sphere2);
sphere2.position.x = 350;
sphere2.position.z = 350;

const geometry6 = new THREE.SphereGeometry(300, 300, 300);
const loader3 = new THREE.CubeTextureLoader();
loader3.setPath('public/skybox/');
const texture_cube3 = loader3.load([
    'space_ft.png', 'space_bk.png', 'space_up.png',
    'space_dn.png', 'space_rt.png', 'space_lf.png'
]);
const material6 = new THREE.MeshBasicMaterial({ color: 0xffffff, envMap: texture_cube3 });
const sphere3 = new THREE.Mesh(geometry6, material6);
scene.add(sphere3);
sphere3.position.x = -350;
sphere3.position.z = 350;

const geometry7 = new THREE.SphereGeometry(300, 300, 300);
const loader4 = new THREE.CubeTextureLoader();
loader4.setPath('public/skybox/');
const texture_cube4 = loader4.load([
    'space_ft.png', 'space_bk.png', 'space_up.png',
    'space_dn.png', 'space_rt.png', 'space_lf.png'
]);
const material7 = new THREE.MeshBasicMaterial({ color: 0xffffff, envMap: texture_cube4 });
const sphere4 = new THREE.Mesh(geometry7, material7);
scene.add(sphere4);
sphere4.position.z = 640;

const geometry8 = new THREE.SphereGeometry(300, 300, 300);
const loader5 = new THREE.CubeTextureLoader();
loader5.setPath('public/skybox/');
const texture_cube5 = loader5.load([
    'space_ft.png', 'space_bk.png', 'space_up.png',
    'space_dn.png', 'space_rt.png', 'space_lf.png'
]);
const material8 = new THREE.MeshBasicMaterial({ color: 0xffffff, envMap: texture_cube5 });
const sphere5 = new THREE.Mesh(geometry8, material8);
scene.add(sphere5);
sphere5.position.y = 350;
sphere5.position.z = 350;

const geometry9 = new THREE.SphereGeometry(300, 300, 300);
const loader6 = new THREE.CubeTextureLoader();
loader6.setPath('public/skybox/');
const texture_cube6 = loader6.load([
    'space_ft.png', 'space_bk.png', 'space_up.png',
    'space_dn.png', 'space_rt.png', 'space_lf.png'
]);
const material9 = new THREE.MeshBasicMaterial({ color: 0xffffff, envMap: texture_cube6 });
const sphere6 = new THREE.Mesh(geometry9, material9);
scene.add(sphere6);
sphere6.position.y = -350;
sphere6.position.z = 350;

function onKeyDown(e) {
    console.log("The current key:" + e.keyCode);
    switch (e.keyCode) {
        case ARROWLEFT:
            orb.position.x += -0.2;
            ufo_top.position.x += -0.2;
            ufo_bottom.position.x += -0.2;
            controls.target.x += -0.2;
            break;

        case ARROWRIGHT:
            orb.position.x += 0.2;
            ufo_top.position.x += 0.2;
            ufo_bottom.position.x += 0.2;
            controls.target.x += 0.2;
            break;

        case ARROWUP:
            orb.position.y += 0.2;
            ufo_top.position.y += 0.2;
            ufo_bottom.position.y += 0.2;
            controls.target.y += 0.2;
            break;

        case ARROWDOWN:
            orb.position.y += -0.2;
            ufo_top.position.y += -0.2;
            ufo_bottom.position.y += -0.2;
            controls.target.y += -0.2;
            break;

        case W_FORWARD:
            orb.position.z += 0.2;
            ufo_top.position.z += 0.2;
            ufo_bottom.position.z += 0.2;
            controls.target.z += 0.2;
            break;

        case S_BACKWARD:
            orb.position.z += -0.2;
            ufo_top.position.z += -0.2;
            ufo_bottom.position.z += -0.2;
            controls.target.z += -0.2;
            break;

        case SPACEBAR:
            orb.position.x = 0;
            orb.position.y = 0;
            orb.position.z = 315;

            ufo_top.position.x = 0;
            ufo_top.position.y = -1;
            ufo_top.position.z = 315;

            ufo_bottom.position.x = 0;
            ufo_bottom.position.y = -2.5;
            ufo_bottom.position.z = 315;

            camera.position.set(0, 0, 340);
            controls.target.set(0, 0, 315);
            break;

        default:
            console.log("The current key:" + e.keyCode);
    }
}

function animate() {
    requestAnimationFrame(animate);

    orb.rotation.x += 0.01;
    orb.rotation.y += 0.01;

    ufo_top.rotation.y += 0.01;

    ufo_bottom.rotation.y += 0.01;

    controls.update();

    renderer.render(scene, camera);
}
animate();