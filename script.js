let hearts = [];

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
    canvas.width = 400;
    canvas.height = 500;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Vẽ thân cây
    ctx.beginPath();
    ctx.moveTo(150, 400);
    ctx.lineTo(150, 100);
    ctx.strokeStyle = 'brown';
    ctx.lineWidth = 10;
    ctx.stroke();

    // Vẽ cành cây
    ctx.beginPath();
    ctx.moveTo(150, 150);
    ctx.lineTo(250, 100);
    ctx.strokeStyle = 'brown';
    ctx.lineWidth = 8;
    ctx.stroke();

    // Vẽ lá (hình trái tim)
    for (let i = 0; i < 10; i++) {
        const x = Math.random() * 200 + 50;
        const y = Math.random() * 100 + 50;
        const size = Math.random() * 20 + 10;
        const color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
        hearts.push({ x, y, size, color, speed: Math.random() * 2 + 1 });
    }

    animateHearts();
}

function drawHeart(x, y, size, color) {
    const canvas = document.getElementById("treeCanvas");
    const ctx = canvas.getContext("2d");
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(Math.PI / 4);
    ctx.beginPath();
    ctx.moveTo(0, size);
    ctx.bezierCurveTo(size / 2, size / 4, size, -size / 3, 0, -size);
    ctx.bezierCurveTo(-size, -size / 3, -size / 2, size / 4, 0, size);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.restore();
}

function animateHearts() {
    const canvas = document.getElementById("treeCanvas");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawTree(); // Vẽ lại cây để không bị mất cành

    hearts.forEach((heart, index) => {
        drawHeart(heart.x, heart.y, heart.size, heart.color);
        heart.y += heart.speed;
        if (heart.y > canvas.height) {
            hearts.splice(index, 1);
            const x = Math.random() * 200 + 50;
            const y = Math.random() * 100 + 50;
            const size = Math.random() * 20 + 10;
            const color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
            hearts.push({ x, y, size, color, speed: Math.random() * 2 + 1 });
        }
    });

    requestAnimationFrame(animateHearts);
}

function nextScreen() {
    alert("Chuyển sang giao diện tiếp theo!");
}
