/* Tương tác giao diện Landing Page thực hành. Không gửi dữ liệu lên máy chủ. */
(function () {
  'use strict';
  var form = document.getElementById('consultForm');
  var message = document.getElementById('formMessage');
  var topButton = document.getElementById('backToTop');
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      form.classList.add('was-validated');
      var phone = document.getElementById('phone');
      phone.value = phone.value.trim().replace(/\s/g, '');
      message.textContent = '';
      if (!form.checkValidity()) {
        message.textContent = 'Vui lòng kiểm tra lại những trường được đánh dấu trước khi tiếp tục.';
        message.style.background = '#fff0ed';
        message.style.color = '#9d322d';
        return;
      }
      message.style.background = '#e9f7ef';
      message.style.color = '#17643e';
      message.textContent = 'Thông tin hợp lệ! Đây là biểu mẫu demo và dữ liệu chưa được gửi đi. Để đăng ký thật, vui lòng sử dụng liên kết đến trang CodeGym chính thức bên dưới.';
    });
  }
  document.querySelectorAll('#mainNav .nav-link, #mainNav .btn').forEach(function (link) {
    link.addEventListener('click', function () {
      if (window.jQuery && window.innerWidth < 992) window.jQuery('#mainNav').collapse('hide');
    });
  });
  function onScroll() { topButton.classList.toggle('visible', window.scrollY > 400); }
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();
  topButton.addEventListener('click', function () { window.scrollTo({top:0,behavior:'smooth'}); });
})();
