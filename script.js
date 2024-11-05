// Foydalanuvchi nomini ko'rsatish
document.getElementById("user-name").textContent = "Telegram Foydalanuvchi";

// Boshlang'ich balans
let balance = 2;
const balanceElement = document.getElementById("user-balance");

// Balans qo'shish funksiyasi
function addBalance() {
    balance += 1;
    balanceElement.textContent = balance;

    // PHP fayliga balans ma'lumotini jo'natish uchun fetch API
    fetch('balance.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ balance: balance })
    })
    .then(response => response.json())
    .then(data => console.log(data.message))
    .catch(error => console.error('Xatolik:', error));
}

// Slayd-shou
const images = document.querySelectorAll(".carousel img");
let currentIndex = 0;

function changeImage() {
    images[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add("active");
}

setInterval(changeImage, 2000); // Har 2 soniyada o'zgaradi
