function startExperience() {
    document.getElementById("start-screen").classList.add("hidden");
    document.getElementById("main-content").classList.remove("hidden");
    typeText("greeting-text", "Chúc mừng ngày 8/3!\nChúc em luôn vui vẻ, xinh đẹp và tràn đầy hạnh phúc! ❤️", 50, function() {
        document.getElementById("treeCanvas").classList.remove("hidden");
        drawTree();
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

function drawTree() {
    const canvas = document.getElementById("treeCanvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 300;
    canvas.height = 400;
    
    // Vẽ thân cây
    ctx.fillStyle = "#8B4513";
    ctx.fillRect(140, 200, 20, 100);
    
    // Vẽ tán lá hình trái tim
    function drawHeart(x, y, color) {
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.bezierCurveTo(x - 15, y - 15, x - 30, y + 10, x, y + 30);
        ctx.bezierCurveTo(x + 30, y + 10, x + 15, y - 15, x, y);
        ctx.fill();
    }
    
    const colors = ["red", "pink", "purple", "orange", "yellow"];
    for (let i = 0; i < 10; i++) {
        let x = 120 + Math.random() * 60;
        let y = 100 + Math.random() * 80;
        let color = colors[Math.floor(Math.random() * colors.length)];
        drawHeart(x, y, color);
    }
    
    animateFallingHearts();
}

function animateFallingHearts() {
    const canvas = document.getElementById("treeCanvas");
    const ctx = canvas.getContext("2d");
    let hearts = [];
    const colors = ["red", "pink", "purple", "orange", "yellow"];
    
    for (let i = 0; i < 5; i++) {
        hearts.push({
            x: 120 + Math.random() * 60,
            y: 100,
            color: colors[Math.floor(Math.random() * colors.length)],
            speed: Math.random() * 2 + 1
        });
    }
    
    function drawHeart(heart) {
        ctx.fillStyle = heart.color;
        ctx.beginPath();
        ctx.moveTo(heart.x, heart.y);
        ctx.bezierCurveTo(heart.x - 10, heart.y - 10, heart.x - 20, heart.y + 5, heart.x, heart.y + 20);
        ctx.bezierCurveTo(heart.x + 20, heart.y + 5, heart.x + 10, heart.y - 10, heart.x, heart.y);
        ctx.fill();
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawTree();
        
        hearts.forEach(heart => {
            heart.y += heart.speed;
            drawHeart(heart);
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();
}

function nextScreen() {
    alert("Chuyển sang giao diện tiếp theo!");
}
