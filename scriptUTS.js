const swiper = new Swiper('.my-swiper', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,        // tampilkan 3 berita sekaligus
  spaceBetween: 20,        // jarak antar slide

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: { slidesPerView: 1 },       // tampilan HP
    768: { slidesPerView: 2 },     // tampilan tablet
    1024: { slidesPerView: 3 },    // tampilan laptop
  },
});



// Saat form disubmit
document.getElementById("customerForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Pesanan berhasil dikirim! Terima kasih sudah memesan di Chatime 💜");
  this.reset();
});