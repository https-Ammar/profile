let loding = document.getElementById("loding");
let main_container = document.getElementById("main_container");

window.addEventListener("load", function () {
  loding.style.display = "none";
  main_container.style.display = "block";
  
  AOS.refresh(); 
});

AOS.init({
  duration: 1000,
  easing: 'ease-in-out',
  once: true
});