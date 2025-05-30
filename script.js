const ukrainianJokes = [
    "Що таке біле і не може літати? — Холодець!",
    "Навіщо курці ноутбук? — Щоб клюкати по клавішах.",
    "Що каже айтішник, коли в нього день народження? — return 1;",
    "Як називається корова без ніг? — Бифштекс.",
    "Чому комп’ютери не можуть плавати? — Бо бояться вірусів у воді.",
    "Як називається пісок, що говорить? — Пісковик!",
    "Чому програмісти так часто п’ють каву? — Бо не можуть обробити «null» без неї.",
    "Що таке батько комп'ютера? — Це мати монітора.",
    "Як комп’ютер починає день? — Від буферизації!",
    "Якщо програміст каже «все працює», це означає тільки, що він не тестував це на всі випадки.",
    "Чому холодильники — це не просто побутові прилади? — Бо вони завжди зберігають холодні жарти.",
    "Що каже програміст, коли в нього є проблеми з Wi-Fi? — 'Я не можу знайти мережу!'",
    "Як називається програміст, який забув на яких стрічках працює? — Код-Забувайло.",
    "Що сказав комп’ютер, коли його не могли включити? — 'Я заблокований.'",
    "Чому сміються тільки програмісти? — Бо вони чекають на дебагінг."
];

let usedJokes = [];
let jokeLimit = 15;

function generateJoke() {
  const jokeText = document.getElementById("jokeText");

  if (usedJokes.length >= jokeLimit) {
    jokeText.value = "Ваші безкоштовні жарти за день вичерпані.";
    return;
  }

  jokeText.value = "Загружається...";  

  const unusedJokes = ukrainianJokes.filter(joke => !usedJokes.includes(joke));

  const randomIndex = Math.floor(Math.random() * unusedJokes.length);
  const selectedJoke = unusedJokes[randomIndex];
  
  usedJokes.push(selectedJoke);
  
  setTimeout(() => {
    jokeText.value = selectedJoke;
  }, 500);
}


 window.addEventListener("load", function() {
    let preloader = document.getElementById("preloader");
    preloader.style.opacity = "0";
    preloader.style.transition = "opacity 1s ease";
    setTimeout(() => preloader.style.display = "none", 1000);
  });
