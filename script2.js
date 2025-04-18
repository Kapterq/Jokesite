window.addEventListener("load", function() {
    let preloader = document.getElementById("preloader");
    preloader.style.opacity = "0";
    preloader.style.transition = "opacity 1s ease";
    setTimeout(() => preloader.style.display = "none", 1000);
  });
