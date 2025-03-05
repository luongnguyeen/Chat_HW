// script.js
function startExperience() {
    document.getElementById("start-screen").classList.add("hidden");
    document.getElementById("main-content").classList.remove("hidden");
    showMessage();
}

function showMessage() {
    const messages = [
        "Chúc mừng ngày 8/3!", 
        "Chúc bạn luôn vui vẻ và hạnh phúc!", 
        "Mọi điều tốt đẹp nhất sẽ đến với bạn!"
    ];
    let index = 0;
    let textContainer = document.getElementById("message");
    textContainer.innerHTML = "";
    
    function typeMessage() {
        if (index < messages.length) {
            let msg = messages[index];
            let i = 0;
            let interval = setInterval(() => {
                if (i < msg.length) {
                    textContainer.innerHTML += msg[i];
                    i++;
                } else {
                    clearInterval(interval);
                    textContainer.innerHTML += "<br>";
                    index++;
                    setTimeout(typeMessage, 1000);
                }
            }, 100);
        } else {
            document.getElementById("next-button").classList.remove("hidden");
            showTree();
        }
    }
    typeMessage();
}

function showTree() {
    document.getElementById("tree-container").classList.remove("hidden");
    startFallingHearts();
}

function startFallingHearts() {
    setInterval(() => {
        let heart = document.createElement("div");
        heart.innerHTML = "❤️";
        heart.style.position = "absolute";
        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.top = "0px";
        heart.style.fontSize = "24px";
        heart.style.animation = "fall 3s linear";
        document.body.appendChild(heart);
        setTimeout(() => { heart.remove(); }, 3000);
    }, 500);
}

function nextScreen() {
    alert("Chúc bạn một ngày 8/3 thật vui vẻ và ý nghĩa!");
}
