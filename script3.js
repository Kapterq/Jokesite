
window.addEventListener("load", function() {
    let preloader = document.getElementById("preloader");
    preloader.style.opacity = "0";
    preloader.style.transition = "opacity 1s ease";
    setTimeout(() => preloader.style.display = "none", 1000);
  });

  const sets = [
    [
      { img: "/images/pagethree1.PNG", name: "Юрій Ткач", caption: "актор «Кварталу 95», відомий своїм комічним образом і простим, народним гумором." },
      { img: "/images/pagethree2.PNG", name: "Робін Вільямс", caption: "легенда стендапу та кіно, імпровізація була його суперсилою." },
      { img: "/images/pagethree3.PNG", name: "Рікі Джервейс", caption: "британський комік, відомий своїм чорним гумором і сарказмом." },
      { img: "/images/pagethree4.PNG", name: "Євген Кошовий", caption: "незмінне обличчя «Кварталу 95», відомий яскравою мімікою, сатиричними ролями і сценічною енергією." },
      { img: "/images/pagethree5.PNG", name: "Лєра Мандзюк", caption: "сучасна стендап-комікеса з тонким гумором і актуальними темами." },
      { img: "/images/pagethree6.PNG", name: "Дейв Шапел", caption: "американський стендапер з сатиричним стилем і соціальною критикою." }
    ],
    [
      { img: "/images/pagethree7.PNG", name: "Анке Енгельке", caption: "німецька акторка і комікеса, майстриня перевтілень і іронії над буденністю." },
      { img: "/images/pagethree8.PNG", name: "Тревор Ноа", caption: "південноафриканський комік і ведучий, поєднує гумор і політичну сатиру з глобальним баченням." },
      { img: "/images/pagethree9.PNG", name: "Емі Шумер", caption: "американська стендаперка, що прославилась відвертим гумором на тему статі, тіла і стереотипів." },
      { img: "/images/pagethree10.PNG", name: "Флоренс Форесті", caption: "французька комікеса, відома енергійністю, харизмою і сміливими пародіями." },
      { img: "/images/pagethree11.PNG", name: "Джеймс Ейкастер", caption: "британець з унікальним стилем і абсурдною логікою, створює цілі гумористичні всесвіти." },
      { img: "/images/pagethree12.PNG", name: "Бо Бернем", caption: "новатор у стендапі, поєднує музику, сатиру і глибокі роздуми про сучасність." }
    ],
    [
      { img: "/images/pagethree13.PNG", name: "Настя Зухвала", caption: "українська стендаперка, відома провокаційністю, самоіронією і гострим поглядом на реальність." },
      { img: "/images/pagethree14.PNG", name: "Джордж Карлін", caption: "легенда стендапу, філософ сцени, чиї монологи змінювали погляди на суспільство." },
      { img: "/images/pagethree15.PNG", name: "Едді Мерфі", caption: "зірка американського стендапу 80-х і голлівудських комедій, відомий харизмою та пародіями." },
      { img: "/images/pagethree16.PNG", name: "Тарас Стадницький", caption: "актор і комік, відомий за образом Володьки з «VIP-Тернопіль», поєднує народний гумор і сучасні теми." },
      { img: "/images/pagethree17.PNG", name: "Джон Кліз", caption: "співзасновник «Монті Пайтона», майстер абсурдного гумору і британської іронії." },
      { img: "/images/pagethree18.PNG", name: "Джоан Ріверз", caption: "піонерка жіночого стендапу, відома своїм гострим язиком і безкомпромісним гумором." }
    ]
  ];
  
  function showSet(index) {
    const gallery = document.getElementById("gallery");
    gallery.innerHTML = "";
  
    sets[index - 1].forEach(item => {
      const div = document.createElement("div");
      div.className = "image";
      div.innerHTML = `
        <img src="${item.img}" alt="${item.name}">
        <p class="name">${item.name}</p>
        <p class="caption">${item.caption}</p>
      `;
      gallery.appendChild(div);
    });
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    showSet(1);
  });
