// --- BỘ TỪ ĐIỂN SONG NGỮ ---
const translations = {
    vi: {
        invite_intro: "Trân trọng kính mời",
        click_to_open: "Chạm để mở thiệp",
        bride_side: "Nhà Gái",
        groom_side: "Nhà Trai",
        mr: "Ông",
        mrs: "Bà",
        invitation_text: "Kính mời tham dự tiệc chung vui<br>cùng gia đình chúng tôi",
        time_title: "Vào lúc 10:30",
        monday: "Thứ Hai",
        march: "Tháng 3",
        year: "Năm 2026",
        lunar_year: "Bính Ngọ",
        lunar_date: "(Tức ngày 13 tháng 2 âm lịch)",
        location_title: "Tổ chức tại",
        address: "TẦNG 2, PHÒNG TIỆC PRINCESS BALLROOM, ĐƯỜNG HOA LAN, KĐT VINHOME RIVERSIDE, PHƯỜNG PHÚC LỢI, HÀ NỘI",
        directions: "Chỉ Đường",
        timeline_title: "Lịch Trình Hôn Lễ",
        timeline_1: "Đón khách",
        timeline_1_desc: "Chụp hình cùng cô dâu chú rể",
        timeline_2: "Thành Hôn",
        timeline_2_desc: "Làm lễ trên sân khấu chính",
        timeline_3: "Khai tiệc",
        timeline_3_desc: "Cùng nâng ly chúc phúc",
        love_quote_1: "\"Tình yêu của bọn mình không quá ồn ào hay hoàn hảo, nhưng đủ vui, đủ tin tưởng và đủ kiên định. Từ hai người xa lạ mà dần dần trở thành thói quen của nhau mỗi ngày. Và rồi, bọn mình chọn gọi mối quan hệ này bằng hai chữ: gia đình.\"",
        groom: "Chú rể",
        bride: "Cô dâu",
        love_quote_2: "Một cột mốc mới bắt đầu. Rất mong có bạn cùng chung vui trong ngày cưới của bọn mình.",
        calendar_header: "Tháng Ba, 2026",
        sun: "CN", mon: "T2", tue: "T3", wed: "T4", thu: "T5", fri: "T6", sat: "T7",
        countdown_title: "Cùng đếm ngược giây phút hạnh phúc",
        day_label: "Ngày", hour_label: "Giờ", min_label: "Phút", sec_label: "Giây",
        gallery_title: "Khoảnh Khắc Đẹp",
        share_btn: "Chia sẻ thiệp"
    },
    en: {
        invite_intro: "Cordially Invite You",
        click_to_open: "Tap to open",
        bride_side: "Bride's Family",
        groom_side: "Groom's Family",
        mr: "Mr.",
        mrs: "Mrs.",
        invitation_text: "Request the pleasure of your company in celebrating the marriage of their children",
        time_title: "At 10:30 AM",
        monday: "Monday",
        march: "March",
        year: "2026",
        lunar_year: "Year of Horse",
        lunar_date: " ",
        location_title: "To be held at",
        address: "SECOND FLOOR, PRINCESS BALLROOM, HOA LAN STREET, VINHOME RIVERSIDE ECO-URBAN AREA, PHUC LOI WARD, HANOI",
        directions: "Get Directions",
        timeline_title: "Wedding Timeline",
        timeline_1: "Welcoming Guests",
        timeline_1_desc: "Photo session with Bride & Groom",
        timeline_2: "Wedding Ceremony",
        timeline_2_desc: "Ceremony on the main stage",
        timeline_3: "Wedding reception",
        timeline_3_desc: "Raise a Toast to the Newlyweds",
        love_quote_1: "\"Love brought us together in the most unexpected way, and from that moment on, our lives have been brighter and filled with laughter. Love is not just in the big moments, but in the small ones too—the soft smile, the shared silence, the comfort of knowing someone sees all of you and chooses you anyway.<br><br>On our wedding day, we want to share that love with the people who mean the most to us. Your presence will make the day unforgettable, and we can’t wait to share moments we’ll treasure forever.\"",
        groom: "Groom",
        bride: "Bride",
        love_quote_2: "Somehow, we became each other’s safe place in a busy world. And now, we are ready to call this love home.",
        calendar_header: "March, 2026",
        sun: "Sun", mon: "Mon", tue: "Tue", wed: "Wed", thu: "Thu", fri: "Fri", sat: "Sat",
        countdown_title: "Counting down to our memorable day",
        day_label: "Days", hour_label: "Hours", min_label: "Mins", sec_label: "Secs",
        gallery_title: "Beautiful Moments",
        share_btn: "Share Invitation"
    }
};

let currentLang = 'vi'; // Mặc định tiếng Việt

document.addEventListener('DOMContentLoaded', () => {
    // 1. Khởi tạo AOS
    AOS.init({ duration: 1200, once: true, offset: 50 });

    // 2. XỬ LÝ CHUYỂN NGÔN NGỮ
    const langOptions = document.querySelectorAll('.lang-option');
    langOptions.forEach(opt => {
        opt.addEventListener('click', () => {
            const selectedLang = opt.getAttribute('data-lang-val');
            if (selectedLang !== currentLang) {
                currentLang = selectedLang;
                
                // Update UI nút bấm
                langOptions.forEach(o => o.classList.remove('active'));
                opt.classList.add('active');
                
                // Update nội dung text
                updateLanguage(currentLang);
            }
        });
    });

    // --- CHIA SẺ LINK & HIỆN THÔNG BÁO ---

// 1. Hàm tạo Toast HTML (Chỉ chạy 1 lần khi load trang)
// Bạn không cần sửa HTML, hàm này tự động thêm div thông báo vào body
    // ... (Các code cũ giữ nguyên) ...
    // Tạo phần tử Toast nếu chưa có
    if (!document.getElementById('toast-notification')) {
        const toast = document.createElement('div');
        toast.id = 'toast-notification';
        document.body.appendChild(toast);
    }

// 2. Hàm xử lý Copy Link

    // Hàm cập nhật nội dung theo ngôn ngữ
    function updateLanguage(lang) {
        document.querySelectorAll('[data-lang]').forEach(el => {
            const key = el.getAttribute('data-lang');
            if (translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });
    }

    const introScreen = document.getElementById('intro-screen');
    const envelope = document.querySelector('.envelope');
    const envelopeArea = document.querySelector('.envelope-area');
    const mainContent = document.getElementById('main-content');
    const musicControl = document.getElementById('music-control');
    const musicIcon = musicControl.querySelector('i');
    const audio = document.getElementById('bg-music');
    let isPlaying = false; 

    // Thêm class floating lúc đầu để nó bay bay
    envelopeArea.classList.add('floating');

    introScreen.addEventListener('click', () => {
        // 1. Dừng bay lơ lửng ngay lập tức
        envelopeArea.classList.remove('floating');
        introScreen.classList.add('intro-fading'); // Ẩn dòng chữ hướng dẫn

        // 2. PHÁT NHẠC
        audio.play().then(() => {
            isPlaying = true;
            musicIcon.classList.replace('fa-play', 'fa-music');
            musicIcon.classList.add('animate-spin-slow');
        }).catch(err => console.log("Autoplay blocked"));

        // 3. ANIMATION STEP 1: Mở nắp (0s)
        envelope.classList.add('open-flap');

        // 4. ANIMATION STEP 2: Rút thư lên (Sau 0.6s - đợi nắp mở xong)
        setTimeout(() => {
            envelope.classList.add('pull-out');
        }, 600);
        setTimeout(() => {
            envelope.classList.add('pull-down');
        }, 1650);

        // 5. ANIMATION STEP 3: Phóng to & Mờ dần (Sau 1.6s - khi thư đã rút lên cao)
        setTimeout(() => {
            envelope.classList.add('zoom-in');
            
            // Làm mờ background
            introScreen.style.opacity = '0';
        }, 4000);

        // 6. KẾT THÚC: Ẩn Intro, Hiện Main (Sau 2.4s)
        setTimeout(() => {
            introScreen.style.display = 'none';
            mainContent.classList.remove('hidden');
            
            // Fade-in nội dung chính nhẹ nhàng
            setTimeout(() => { 
                mainContent.style.opacity = '1'; 
            }, 50);

            musicControl.classList.remove('hidden');
            
            // Khởi chạy hiệu ứng cuộn trang
            AOS.init({ duration: 1200, once: true, offset: 50 });
            createPetals();
        }, 4600); 
    });
    // 4. BỘ ĐẾM NGƯỢC
    const weddingDate = new Date("2026-03-30T10:30:00").getTime(); 

    setInterval(function() {
        const now = new Date().getTime();
        const distance = weddingDate - now;

        if (distance < 0) {
            document.getElementById("countdown").innerHTML = "<div class='text-xl text-gold font-bold'>Happily Ever After!</div>";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        const format = (n) => n < 10 ? '0' + n : n;
        
        if(document.getElementById("days")) {
            document.getElementById("days").innerText = format(days);
            document.getElementById("hours").innerText = format(hours);
            document.getElementById("minutes").innerText = format(minutes);
            document.getElementById("seconds").innerText = format(seconds);
        }
    }, 1000);

    // 5. Music Player Control
    musicControl.addEventListener('click', (e) => {
        e.stopPropagation(); 
        if (isPlaying) {
            audio.pause();
            musicIcon.classList.replace('fa-music', 'fa-play');
            musicIcon.classList.remove('animate-spin-slow');
        } else {
            audio.play();
            musicIcon.classList.replace('fa-play', 'fa-music');
            musicIcon.classList.add('animate-spin-slow');
        }
        isPlaying = !isPlaying;
    });

    // 6. Modal & Copy (Giữ nguyên)
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
});

function createPetals() {
    const container = document.getElementById('petals-container');
    const petalCount = 50; 
    const colors = ['#ffc0cb', '#ffb7b2', '#ffdac1', '#ffe4e1'];

    for (let i = 0; i < petalCount; i++) {
        const petal = document.createElement('div');
        petal.classList.add('petal');
        petal.style.left = Math.random() * 100 + 'vw';
        const size = Math.random() * 10 + 10; 
        petal.style.width = size + 'px';
        petal.style.height = size + 'px';
        petal.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        petal.style.opacity = Math.random() * 0.5 + 0.3; 
        petal.style.animationDuration = Math.random() * 5 + 5 + 's'; 
        petal.style.animationDelay = Math.random() * 5 + 's';
        container.appendChild(petal);
    }
}
function shareLink() {
    const url = window.location.href; // Lấy đường dẫn hiện tại

    // API sao chép vào clipboard
    navigator.clipboard.writeText(url).then(() => {
        // Kiểm tra ngôn ngữ đang chọn (biến currentLang ở code trước)
        // Nếu biến currentLang chưa định nghĩa thì mặc định là 'vi'
        const lang = (typeof currentLang !== 'undefined') ? currentLang : 'vi';
        
        const msg = lang === 'en' 
            ? '<i class="fa-solid fa-check"></i> Link copied to clipboard!' 
            : '<i class="fa-solid fa-check"></i> Đã sao chép đường dẫn!';
            
        showToast(msg);
    }).catch(err => {
        console.error('Không thể sao chép: ', err);
        // Fallback nếu lỗi (ít khi xảy ra)
        alert('Không thể tự động sao chép. Hãy copy thủ công đường dẫn phía trên.');
    });
}

// 3. Hàm hiển thị Toast
function showToast(message) {
    const toast = document.getElementById("toast-notification");
    
    // Gán nội dung
    toast.innerHTML = message;
    
    // Thêm class để hiện
    toast.className = "show";
    
    // Tự động ẩn sau 3 giây
    setTimeout(function(){ 
        toast.className = toast.className.replace("show", ""); 
    }, 3000);
}