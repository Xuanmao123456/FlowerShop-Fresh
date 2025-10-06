document.addEventListener('DOMContentLoaded', function() {
    const wrapper = document.querySelector('.carousel-wrapper');
    const slides = document.querySelectorAll('.slide');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    const indicators = document.querySelectorAll('.indicator'); // 轮播指示器
    let currentIndex = 0;

    // 更新轮播图位置
    function goToSlide(index) {
        const translateValue = -index * (100 / slides.length) + '%';
        wrapper.style.transform = `translateX(${translateValue})`;
        currentIndex = index;
        updateIndicators(); // 同步更新指示器状态
    }

    // 更新指示器激活状态
    function updateIndicators() {
        indicators.forEach((indicator, i) => {
            if (i === currentIndex) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }

    // 下一张
    next.addEventListener('click', () => {
        let nextIndex = currentIndex + 1;
        if (nextIndex >= slides.length) nextIndex = 0;
        goToSlide(nextIndex);
    });

    // 上一张
    prev.addEventListener('click', () => {
        let prevIndex = currentIndex - 1;
        if (prevIndex < 0) prevIndex = slides.length - 1;
        goToSlide(prevIndex);
    });

    // 点击指示器切换轮播
    indicators.forEach(indicator => {
        indicator.addEventListener('click', () => {
            const index = parseInt(indicator.dataset.index);
            goToSlide(index);
        });
    });

    // 自动轮播
    setInterval(() => {
        next.click();
    }, 3000);

    // 初始显示第1张图
    goToSlide(0);
});