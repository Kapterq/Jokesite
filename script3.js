let input = document.querySelector(".search-input");
let cards = document.querySelectorAll(".image");

input.addEventListener("input", function () {
    let input_value = input.value.trim().toLowerCase();

    cards.forEach(card => {
        let name = card.querySelector(".name").textContent.toLowerCase();
        if (input_value !== "") {
            card.style.display = name.includes(input_value) ? "block" : "none";
        } else {
            card.style.display = "block";
        }
    });
});


window.addEventListener("load", function() {
    let preloader = document.getElementById("preloader");
    preloader.style.opacity = "0";
    preloader.style.transition = "opacity 1s ease";
    setTimeout(() => preloader.style.display = "none", 1000);
  });
