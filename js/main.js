document.addEventListener('DOMContentLoaded', () => {
    // 1. Khởi tạo hiệu ứng AOS
    AOS.init({ duration: 1200, once: true, offset: 50 });

    // 2. BỘ ĐẾM NGƯỢC (COUNTDOWN LOGIC) - CHÍNH XÁC ĐẾN NGÀY 30/03/2026
    const weddingDate = new Date("2026-03-30T10:30:00").getTime(); // Định dạng: YYYY-MM-DDTHH:mm:ss

    const countdownInterval = setInterval(function() {
        const now = new Date().getTime();
        const distance = weddingDate - now;

        if (distance < 0) {
            clearInterval(countdownInterval);
            document.getElementById("countdown").innerHTML = "<div class='text-xl text-gold font-bold'>Đã đến ngày hạnh phúc!</div>";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Helper thêm số 0 đằng trước nếu nhỏ hơn 10
        const format = (n) => n < 10 ? '0' + n : n;

        document.getElementById("days").innerText = format(days);
        document.getElementById("hours").innerText = format(hours);
        document.getElementById("minutes").innerText = format(minutes);
        document.getElementById("seconds").innerText = format(seconds);
    }, 1000);

    // 3. Xử lý Accordion (Mở/Đóng Banking)
    window.toggleAccordion = function(id) {
        const content = document.getElementById(id);
        const icon = document.getElementById('icon-' + id);
        
        // Đóng các tab khác (nếu muốn chỉ mở 1 cái 1 lúc)
        document.querySelectorAll('[id$="-bank"]').forEach(el => {
           if (el.id !== id) el.classList.add('hidden');
        });
        document.querySelectorAll('.fa-chevron-down').forEach(el => {
           if (el.id !== 'icon-' + id) el.style.transform = 'rotate(0deg)';
        });

        if (content.classList.contains('hidden')) {
            content.classList.remove('hidden');
            icon.style.transform = 'rotate(180deg)';
        } else {
            content.classList.add('hidden');
            icon.style.transform = 'rotate(0deg)';
        }
    }

    // 4. Copy STK & Hiệu ứng thông báo
    window.copyText = function(btn, text) {
        navigator.clipboard.writeText(text).then(() => {
            const originalText = btn.innerHTML;
            btn.innerHTML = '<i class="fa-solid fa-check"></i> <span>Đã sao chép!</span>';
            btn.classList.add('bg-gold', 'text-white');
            
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.classList.remove('bg-gold', 'text-white');
            }, 2000);
        });
    }

    // 5. Modal Lightbox
    window.openModal = function(img) {
        const modal = document.getElementById('imageModal');
        const modalImg = document.getElementById('modalImg');
        modalImg.src = img.src.replace('w=600', 'w=1200');
        modalImg.style.transform = 'scale(1)';
        modal.classList.remove('hidden');
    }
    window.closeModal = function() {
        document.getElementById('imageModal').classList.add('hidden');
    }

    // 6. Music Player Control
    const musicBtn = document.getElementById('music-control');
    const audio = document.getElementById('bg-music');
    let isPlaying = false;

    musicBtn.addEventListener('click', () => {
        if (isPlaying) {
            audio.pause();
            musicBtn.querySelector('i').classList.replace('fa-music', 'fa-play');
            musicBtn.querySelector('i').classList.remove('animate-spin-slow');
        } else {
            audio.play();
            musicBtn.querySelector('i').classList.replace('fa-play', 'fa-music');
            musicBtn.querySelector('i').classList.add('animate-spin-slow');
        }
        isPlaying = !isPlaying;
    });

    // Tự động nhắc bật nhạc (Optional)
    document.body.addEventListener('click', () => {
        if(!isPlaying) { 
            // audio.play(); // Bỏ comment nếu muốn tự động phát khi chạm vào màn hình
            // isPlaying = true;
        }
    }, { once: true });

    // 7. Tạo hiệu ứng hoa rơi (Petals)
    createPetals();
});

function createPetals() {
    const container = document.getElementById('petals-container');
    const petalCount = 15; // Số lượng cánh hoa
    
    for (let i = 0; i < petalCount; i++) {
        const petal = document.createElement('div');
        petal.classList.add('petal');
        petal.style.left = Math.random() * 100 + 'vw';
        petal.style.animationDuration = Math.random() * 5 + 8 + 's'; // 8-13s
        petal.style.animationDelay = Math.random() * 5 + 's';
        petal.style.width = Math.random() * 10 + 10 + 'px';
        petal.style.height = Math.random() * 10 + 10 + 'px';
        container.appendChild(petal);
    }
}