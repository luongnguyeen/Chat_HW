/* script.js */
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".heart").addEventListener("click", function() {
        document.getElementById("start-screen").classList.add("hidden");
        document.getElementById("main-content").classList.remove("hidden");
    });

    const text = "Chúc mừng ngày 8/3! Chúc bạn luôn vui vẻ, hạnh phúc và gặp nhiều may mắn!";
    let index = 0;
    function typeText() {
        if (index < text.length) {
            document.getElementById("typing-text").textContent += text[index];
            index++;
            setTimeout(typeText, 100);
        } else {
            document.getElementById("next-button").classList.remove("hidden");
        }
    }
    typeText();

    document.querySelector("#next-button").addEventListener("click", function() {
        alert("Chúc bạn có một ngày thật tuyệt vời!");
    });
});
