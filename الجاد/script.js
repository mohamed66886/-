// تفعيل القائمة المتنقلة
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

// إغلاق القائمة عند النقر على رابط
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenu.classList.remove('active');
    });
});

// تسجيل الدخول
document.getElementById('login-btn').addEventListener('click', function(e) {
    e.preventDefault();
    const username = prompt("أدخل اسم المستخدم:");
    if (username) {
        document.getElementById('username').textContent = username;
        document.getElementById('username').style.display = 'inline';
        this.style.display = 'none';
    }
});

// السلايدر
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function changeSlide(n) {
    currentSlide += n;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    showSlide(currentSlide);
}

// التبديل التلقائي كل 5 ثوانٍ
setInterval(() => changeSlide(1), 5000);

// عرض الشريحة الأولى عند التحميل
document.addEventListener("DOMContentLoaded", () => showSlide(currentSlide));

// عرض تفاصيل الخدمة
function showServiceDetails(title, description) {
    const detailsDiv = document.getElementById('service-details');
    detailsDiv.innerHTML = `
        <h3>${title}</h3>
        <p>${description}</p>
    `;
    detailsDiv.classList.add('active');
}

// تقييمات النجوم
document.querySelectorAll('.rating-input .star').forEach(star => {
    star.addEventListener('click', function() {
        const value = this.getAttribute('data-value');
        document.querySelectorAll('.rating-input .star').forEach(s => {
            s.classList.remove('active');
            if (s.getAttribute('data-value') <= value) {
                s.classList.add('active');
            }
        });
    });
});

// إضافة رأي جديد
document.getElementById('testimonial-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const testimonialText = this.querySelector('textarea').value;
    const testimonialName = this.querySelector('input[type="text"]').value;
    const rating = document.querySelectorAll('.rating-input .star.active').length;

    if (testimonialText && testimonialName && rating > 0) {
        const testimonialList = document.querySelector('.testimonial-list');
        const newTestimonial = document.createElement('div');
        newTestimonial.classList.add('testimonial-item');
        newTestimonial.innerHTML = `
            <p>"${testimonialText}"</p>
            <h3>- ${testimonialName}</h3>
            <div class="rating">
                ${'<span class="star">&#9733;</span>'.repeat(rating)}
                ${'<span class="star">&#9734;</span>'.repeat(5 - rating)}
            </div>
        `;
        testimonialList.appendChild(newTestimonial);
        this.reset();
        alert("تم إضافة رأيك بنجاح!");
    } else {
        alert("يرجى ملء جميع الحقول وتقييم الخدمة.");
    }
});

// إرسال نموذج الاتصال
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector('textarea').value;

    if (name && email && message) {
        alert(`شكرًا ${name}، تم استلام رسالتك بنجاح!`);
        this.reset();
    } else {
        alert("يرجى ملء جميع الحقول.");
    }
});