// ... (các JavaScript khác) ...

const imageSphere = document.querySelector('.image-sphere');
const images = [
    'image1.jpg', // Thay thế bằng đường dẫn ảnh của bạn
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
    'image5.jpg',
    'image6.jpg',
    'image7.jpg',
    'image8.jpg',
];

function createSphere() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, imageSphere.offsetWidth / imageSphere.offsetHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(imageSphere.offsetWidth, imageSphere.offsetHeight);
    imageSphere.appendChild(renderer.domElement);

    const geometry = new THREE.SphereGeometry(150, 32, 32);
    const materials = images.map(image => {
        const texture = new THREE.TextureLoader().load(image);
        return new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide });
    });
    const sphere = new THREE.Mesh(geometry, materials);
    scene.add(sphere);

    camera.position.z = 300;

    function animate() {
        requestAnimationFrame(animate);
        sphere.rotation.x += 0.005;
        sphere.rotation.y += 0.005;
        renderer.render(scene, camera);
    }
    animate();

    imageSphere.addEventListener('click', () => {
        const selectedImage = images[Math.floor(Math.random() * images.length)];
        alert(`Ảnh được chọn: ${selectedImage}`);
    });
}

createSphere();
