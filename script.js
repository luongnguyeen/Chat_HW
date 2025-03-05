const startScreen = document.getElementById('start-screen');
const mainContent = document.getElementById('main-content');
const startText = document.getElementById('start-text');
const heart = document.querySelector('.heart');
const typingText = document.getElementById('typing-text');
const nextButton = document.getElementById('next-button');
const imageBoxes = document.querySelectorAll('.image-box');

const messages = [
    "Chúc em ngày 8/3 thật nhiều niềm vui và hạnh phúc!",
    "Em là người con gái tuyệt vời nhất anh từng gặp.",
    "Anh mong rằng mỗi ngày của em đều tràn ngập tiếng cười.",
    "Cảm ơn em đã đến bên anh."
];

let messageIndex = 0;
let charIndex = 0;

function typeWriter() {
    if (messageIndex < messages.length) {
        if (charIndex < messages[messageIndex].length) {
            typingText.innerHTML += messages[messageIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, 50); // Tốc độ gõ chữ
        } else {
            messageIndex++;
            charIndex = 0;
            typingText.innerHTML += "<br><br>";
            setTimeout(typeWriter, 1000); // Thời gian chờ giữa các câu
        }
    } else {
        nextButton.style.display = 'block';
    }
}

startScreen.addEventListener('click', () => {
    startScreen.style.display = 'none';
    mainContent.style.display = 'flex';
    typeWriter();
});

heart.addEventListener('click', () => {
    startScreen.style.display = 'none';
    mainContent.style.display = 'flex';
    typeWriter();
});

nextButton.addEventListener('click', () => {
    // Chuyển sang giao diện tiếp theo (bạn có thể thêm mã ở đây)
    alert("Chuyển sang giao diện tiếp theo!");
});

imageBoxes.forEach(box => {
    box.addEventListener('click', () => {
        const img = box.querySelector('img');
        window.open(img.src, '_blank');
    });
});
