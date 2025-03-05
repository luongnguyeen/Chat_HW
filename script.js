function startExperience() {
    document.getElementById("start-screen").classList.add("hidden");
    document.getElementById("main-content").classList.remove("hidden");
    typeText("greeting-text", "Chúc mừng ngày 8/3!\nChúc em luôn vui vẻ, xinh đẹp và tràn đầy hạnh phúc! ❤️", 50, function() {
        document.getElementById("next-btn").classList.remove("hidden");
    });
}

function typeText(elementId, text, speed, callback) {
    let i = 0;
    function typing() {
        if (i < text.length) {
            document.getElementById(elementId).innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        } else if (callback) {
            callback();
        }
    }
    typing();
}

function nextScreen() {
    alert("Chuyển sang giao diện tiếp theo!");
}
