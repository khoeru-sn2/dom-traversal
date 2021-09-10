//penggunaan dom traversal menggunakan forEach
// jika diklik tanda closenya mak, kotak cardnya akan hilang

const close = document.querySelectorAll(".close");
close.forEach(function (el) {
  el.addEventListener("click", function (e) {
    e.target.parentElement.style.display = "none";
  });
});
