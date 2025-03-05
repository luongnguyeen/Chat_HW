const startScreen = document.getElementById('start-screen');
const mainScreen = document.getElementById('main-screen');
const heart = document.querySelector('.heart');
const message = document.querySelector('.message');
const greeting = document.getElementById('greeting');
const imageGallery = document.getElementById('image-gallery');
const nextButton = document.getElementById('next-button');
const footer = document.querySelector('footer');

const greetings = [
    "Chúc mừng ngày Quốc tế Phụ nữ 8/3!",
    "Chúc em luôn xinh đẹp, rạng rỡ và hạnh phúc.",
    "Anh mong rằng em sẽ có một ngày thật ý nghĩa và tràn đầy niềm vui.",
    "Em là người đặc biệt nhất trong trái tim anh."
];

let greetingIndex = 0;

function showGreeting() {
    if (greetingIndex < greetings.length) {
        greeting.textContent += greetings[greetingIndex] + " ";
        greetingIndex++;
        setTimeout(showGreeting, 500); // Tốc độ gõ chữ
    } else {
        createImageGallery();
    }
}

function createImageGallery() {
    const imageCount = 6; // Số lượng ảnh
    const radius = 150; // Bán kính hình cầu

    for (let i = 0; i < imageCount; i++) {
        const img = document.createElement('img');
        img.src = `images/image${i + 1}.jpg`; // Thay đổi đường dẫn ảnh
        const theta = Math.PI * 2 / imageCount * i;
        const x = Math.cos(theta) * radius;
        const z = Math.sin(theta) * radius;
        img.style.transform = `translateX(${x}px) translateZ(${z}px)`;
        imageGallery.appendChild(img);
    }
}

heart.addEventListener('click', () => {
    startScreen.classList.add('hidden');
    mainScreen.classList.remove('hidden');
    showGreeting();
    footer.style.display = 'block';
});

message.addEventListener('click', () => {
    startScreen.classList.add('hidden');
    mainScreen.classList.remove('hidden');
    showGreeting();
    footer.style.display = 'block';
});
