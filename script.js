const startScreen = document.getElementById('start-screen');
const contentScreen = document.getElementById('content-screen');
const finalScreen = document.getElementById('final-screen');
const heart = document.querySelector('.heart');
const startText = document.querySelector('.start-text');
const typingText = document.getElementById('typing-text');
const nextButton = document.getElementById('next-button');
const galleryImages = document.querySelectorAll('.gallery-image');

const messages = [
    "Chúc em ngày 8/3 thật nhiều niềm vui và hạnh phúc!",
    "Em là người con gái tuyệt vời nhất mà anh từng gặp.",
    "Anh yêu em nhiều lắm!",
    // Thêm lời chúc của bạn vào đây
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
            typingText.innerHTML += "<br><br>"; // Xuống dòng sau mỗi lời chúc
            setTimeout(typeWriter, 1000); // Dừng 1 giây trước khi hiển thị lời chúc tiếp theo
        }
    } else {
        nextButton.classList.remove('hidden');
    }
}

startScreen.addEventListener('click', () => {
    startScreen.classList.add('hidden');
    contentScreen.classList.remove('hidden');
    typeWriter();
});

nextButton.addEventListener('click', () => {
    contentScreen.classList.add('hidden');
    finalScreen.classList.remove('hidden');
});

galleryImages.forEach(image => {
    image.addEventListener('click', () => {
        window.open(image.src, '_blank'); // Mở ảnh trong tab mới
    });
});
