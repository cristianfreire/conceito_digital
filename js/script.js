const fff = document.getElementById('header');
console.log(fff)
window.addEventListener('scroll', () => {
  if (window.scrollY >= 100) {
    header.style.opacity = "0";
  } else {
    header.style.opacity = "1";
  }
})