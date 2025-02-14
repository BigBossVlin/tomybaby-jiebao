// 爱心生成函数
function createHearts() {
    const container = document.getElementById('hearts-container');
    const heartCount = 20;

    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤';
        heart.classList.add('heart');
        
        // 随机位置和动画延迟
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 5 + 's';
        heart.style.fontSize = Math.random() * 20 + 15 + 'px';
        
        container.appendChild(heart);
    }
}

// 轮播控制
function initCarousel() {
    const items = document.querySelectorAll('.carousel-item');
    let current = 0;

    function nextSlide() {
        items[current].classList.remove('active');
        current = (current + 1) % items.length;
        items[current].classList.add('active');
    }

    // 每10秒切换
    setInterval(nextSlide, 10000);
}

// 音乐自动播放处理
function handleMusic() {
    const audio = document.getElementById('bg-music');
    document.addEventListener('click', () => {
        audio.play().catch(() => {});
    }, { once: true });
}

// 初始化
window.onload = function() {
    createHearts();
    initCarousel();
    handleMusic();
};
