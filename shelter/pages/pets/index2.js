const logo = document.querySelector(".logo");
logo.addEventListener("click", () => {
  window.location.href = "../main/index.html";
});

const wrappermainpages = document.querySelector(".wrapper_mainpages");
const owerlof = document.querySelector(".owerlof");
const navMenu = document.querySelector(".nav_main-pages");
const toggleButton = document.querySelector(".toggleButton");
const logo_burger = document.querySelector(".logo_burger");
const list = document.querySelector(".list_main-pages");

function toggleMenu() {
  const windowWidth = window.innerWidth;
  if (windowWidth < 768) {
    navMenu.classList.toggle("burger-menu_active");
    toggleButton.classList.toggle("active_menu");
    if (toggleButton.classList.contains("active_menu")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }

    setTimeout(() => owerlof.classList.toggle("hide"), 200);
    // owerlof.classList.toggle('hide')
    logo_burger.style.display = "block";
  }
}
toggleButton.addEventListener("click", () => {
  toggleMenu();
});

function closeMenu() {
  owerlof.classList.remove("hide");
  navMenu.classList.remove("burger-menu_active");
  toggleButton.classList.remove("active_menu");
  logo_burger.style.display = "none";
  document.body.style.overflow = "visible";
}

owerlof.addEventListener("click", () => {
  closeMenu();
});

list.addEventListener("click", () => {
  closeMenu();
});

window.addEventListener("resize", function () {
  if (window.innerWidth > 767) {
    closeMenu();
  }
});

/*modal and pagination*/
const pets = [
  {
    name: "Katrine",
    img: "../../assets/images/katrine.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    age: "6 months",
    inoculations: ["panleukopenia"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Jennifer",
    img: "../../assets/images/jennifer.png",
    type: "Dog",
    breed: "Labrador",
    description:
      "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    age: "2 months",
    inoculations: ["none"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Woody",
    img: "../../assets/images/woody.png",
    type: "Dog",
    breed: "Golden Retriever",
    description:
      "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    age: "3 years 6 months",
    inoculations: ["adenovirus", "distemper"],
    diseases: ["right back leg mobility reduced"],
    parasites: ["none"],
  },
  {
    name: "Sophia",
    img: "../../assets/images/sophia.png",
    type: "Dog",
    breed: "Shih tzu",
    description:
      "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    age: "1 month",
    inoculations: ["parvovirus"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Scarlett",
    img: "../../assets/images/scarlett.png",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description:
      "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    age: "3 months",
    inoculations: ["parainfluenza"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Timmy",
    img: "../../assets/images/timmy.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    age: "2 years 3 months",
    inoculations: ["calicivirus", "viral rhinotracheitis"],
    diseases: ["kidney stones"],
    parasites: ["none"],
  },
  {
    name: "Freddie",
    img: "../../assets/images/freddie.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    age: "2 months",
    inoculations: ["rabies"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Charly",
    img: "../../assets/images/charly.png",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description:
      "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    age: "8 years",
    inoculations: ["bordetella bronchiseptica", "leptospirosis"],
    diseases: ["deafness", "blindness"],
    parasites: ["lice", "fleas"],
  },
];

const sliderContainer = document.querySelector(".slider-container");
const pets_cards = document.querySelectorAll(".pets_card");
const navigation_page = document.querySelector(".navigation_page");
const btnNextPage = document.querySelector(".btn_nextPage");
const pageNumberSpan = document.querySelector(".page_number_span");
const button_right = document.querySelector(".button_right");
const button_left = document.querySelector(".button_left");
const buttonActive = document.querySelector(".button-arow_active");
const nextButton = document.getElementById("next-button");
const prevButton = document.getElementById("prev-button");
const back = document.querySelector(".back");
const backBack = document.querySelector(".backback");
const front = document.querySelector(".front");
const frontFront = document.querySelector(".frontfront");
const lastButton = document.getElementById("last-button");
const firstButton = document.getElementById("first-button");

const createCardTemplate = (i) => {
  const card = document.createElement("div");
  card.classList.add("pets_card");
  card.dataset.index = i;
  return card;
};

const getShuffleCards = (arr) => {
  arr.sort(() => Math.random() - 0.5);
  return arr;
};

let shuffleCards1 = pets.sort(() => Math.random() - 0.5);

let shuffleCards2 = shuffleCards1.map((el) => el);
shuffleCards2 = shuffleCards2.sort(() => Math.random() - 0.5);

let shuffleCards3 = shuffleCards2.map((el) => el);
shuffleCards3 = shuffleCards3.sort(() => Math.random() - 0.5);

let shuffleCards4 = shuffleCards3.map((el) => el);
shuffleCards4 = shuffleCards4.sort(() => Math.random() - 0.5);

let shuffleCards5 = shuffleCards4.map((el) => el);
shuffleCards5 = shuffleCards5.sort(() => Math.random() - 0.5);

let shuffleCards6 = shuffleCards5.map((el) => el);
shuffleCards6 = shuffleCards6.sort(() => Math.random() - 0.5);

let petsAllCards = shuffleCards1.concat(
  shuffleCards2,
  shuffleCards3,
  shuffleCards4,
  shuffleCards5,
  shuffleCards6
);
console.log(petsAllCards);

let i = 0;
let k = 0;
let count = 48;
let numberPage = 1;
var countPages = 6;

let numberCardsonPage;
let winWid = window.innerWidth;

if (winWid > 767 && winWid < 1280) {
  numberCardsonPage = 6;
} else if (winWid > 1279) {
  numberCardsonPage = 8;
} else {
  numberCardsonPage = 3;
}
countPages = Math.ceil(count / numberCardsonPage);
console.log("количесто на странице -", numberCardsonPage);
console.log("количесто cтраниц -", countPages);

window.addEventListener("resize", () => {
  if (window.innerWidth > 1279) {
    numberCardsonPage = 8;
    //console.log(numberCardsonPage)
  } else if (window.innerWidth > 767 && window.innerWidth < 1280) {
    numberCardsonPage = 6;
    // console.log(numberCardsonPage)
  } else {
    numberCardsonPage = 3;
    // console.log(numberCardsonPage)
  }
  countPages = Math.ceil(count / numberCardsonPage);
  console.log(countPages);
  return numberCardsonPage;
});

console.log("количесто на странице -", numberCardsonPage);
let page = 0;
const createAllCards = () => {
  sliderContainer.innerHTML = "";

  for (
    let j = page * numberCardsonPage;
    j < (page + 1) * numberCardsonPage;
    j++
  ) {
    console.log("then3", j);
    card = createCardTemplate(j);
    card.innerHTML = `
      <img class="card-image" src="${petsAllCards[j].img}" alt="${petsAllCards[j].name}">    
      <span class="card-title">${petsAllCards[j].name}</span>
      <div class="card-button"><button class="button_secondary">Learn more</button></div>`;
    sliderContainer.appendChild(card);

    card.addEventListener("click", function () {
      const idx = this.dataset.index;
      document.body.style.overflow = "hidden";
      createModalWindow(idx);
    });
  }
};
createAllCards();

const createModalWindow = (i) => {
  console.log("index - ", i);
  const modal = document.createElement("div");
  modal.classList.add("modal-background");
  modal.innerHTML = `
    <div class="modal-window"><div class ="modal-close-button"></div>
    <div class="modal-content">        
    <img class="modal-image" src="${petsAllCards[i].img}" alt = "${petsAllCards[i].name}">
    <div class = "modal-info">
    <div class = "modal-title">${petsAllCards[i].name}</div>
    <div class = "modal-subtitle">${petsAllCards[i].type} - ${petsAllCards[i].breed}</div>
    <div class = "modal-description">${petsAllCards[i].description}</div>
    <ul class= "modal-list">
    <li class = "modal-list-item"><span class = "list-span-title">Age:</span><span class = "list-span-info"> ${petsAllCards[i].age}</span></li>
    <li class = "modal-list-item"><span class = "list-span-title">Inoculations:</span><span class = "list-span-info"> ${petsAllCards[i].inoculations}</span></li>
    <li class = "modal-list-item"><span class = "list-span-title">Diseases:</span><span class = "list-span-info"> ${petsAllCards[i].diseases}</span></li>
    <li class = "modal-list-item"><span class = "list-span-title">Parasites:</span><span class = "list-span-info"> ${petsAllCards[i].parasites}</span></li>
    </ul>
    </div>
    </div>
    </div>`;
  document.body.append(modal);
  document.body.style.overflow = "hidden";

  const modalCloseButton = document.querySelectorAll(".modal-close-button");
  modalCloseButton.forEach((el) => {
    el.addEventListener("click", function () {
      document.body.style.overflow = "visible";
      document.body.removeChild(modal);
    });
  });

  const modalBackground = document.querySelectorAll(".modal-background");

  modalBackground.forEach((el) => {
    el.onclick = (e) => {
      if (e.target == el) {
        document.body.style.overflow = "visible";
        document.body.removeChild(modal);
      }
    };
  });

  modalBackground.forEach((el) => {
    el.onmouseover = (e) => {
      if (e.target == el) {
        modalCloseButton.forEach((item) => {
          item.classList.add("close-button-hover");
        });
      }
    };

    el.onmouseout = (e) => {
      if (e.target == el) {
        modalCloseButton.forEach((item) => {
          item.classList.remove("close-button-hover");
        });
      }
    };
  });
};

const nextPage = () => {
  sliderContainer.innerHTML = "";
  page += 1;
  for (
    let j = page * numberCardsonPage;
    j < (page + 1) * numberCardsonPage;
    j++
  ) {
    console.log("then3", j);
    card = createCardTemplate(j);
    card.innerHTML = `
      <img class="card-image" src="${petsAllCards[j].img}" alt="${petsAllCards[j].name}">    
      <span class="card-title">${petsAllCards[j].name}</span>
      <div class="card-button"><button class="button_secondary">Learn more</button></div>`;
    sliderContainer.appendChild(card);

    card.addEventListener("click", function () {
      const idx = this.dataset.index;
      document.body.style.overflow = "hidden";
      createModalWindow(idx);
    });
  }

  console.log("page =", page);
  
  /* if (k == 0) {
    k = k + numberCardsonPage;
  }
  for (let j = 0; j < numberCardsonPage; j++) {
    console.log("then3", k);
    card = createCardTemplate(k);
    card.innerHTML = `
      <img class="card-image" src="${petsAllCards[k].img}" alt="${petsAllCards[k].name}">    
      <span class="card-title">${petsAllCards[k].name}</span>
      <div class="card-button"><button class="button_secondary">Learn more</button></div>`;
    sliderContainer.appendChild(card);

    card.addEventListener("click", function () {
      const idx = this.dataset.index;
      document.body.style.overflow = "hidden";
      createModalWindow(idx);
    });
    if (k == 47) {
      k = k - numberCardsonPage;
    } else {
      k++;
    }

    
  }
  console.log('k = ', k)  */
};

const btn_prevPage = document.querySelector(".btn_prevPage");
const btnLeft = document.querySelector(".btn-left");

const prevPage = () => {
  sliderContainer.innerHTML = "";
  page -= 1;
  for (
    let j = page * numberCardsonPage;
    j < (page + 1) * numberCardsonPage;
    j++
  ) {
    console.log("then3", j);
    card = createCardTemplate(j);
    card.innerHTML = `
      <img class="card-image" src="${petsAllCards[j].img}" alt="${petsAllCards[j].name}">    
      <span class="card-title">${petsAllCards[j].name}</span>
      <div class="card-button"><button class="button_secondary">Learn more</button></div>`;
    sliderContainer.appendChild(card);

    card.addEventListener("click", function () {
      const idx = this.dataset.index;
      document.body.style.overflow = "hidden";
      createModalWindow(idx);
    });
  }
};

const lastPage = () => {
  sliderContainer.innerHTML = "";
  page = countPages - 1;
  for (
    let j = page * numberCardsonPage;
    j < (page + 1) * numberCardsonPage;
    j++
  ) {
    console.log("then3", j);
    card = createCardTemplate(j);
    card.innerHTML = `
      <img class="card-image" src="${petsAllCards[j].img}" alt="${petsAllCards[j].name}">    
      <span class="card-title">${petsAllCards[j].name}</span>
      <div class="card-button"><button class="button_secondary">Learn more</button></div>`;
    sliderContainer.appendChild(card);

    card.addEventListener("click", function () {
      const idx = this.dataset.index;
      document.body.style.overflow = "hidden";
      createModalWindow(idx);
    });
  }
};

lastButton.onclick = () => {
  lastPage();
  console.log("last page");

  pageNumberSpan.innerText = `${countPages}`;
  button_right.classList.remove("button-arow_active");
  lastButton.classList.remove("button-arow_active");
  nextButton.disabled = true;
  nextButton.style.cursor = "default";
  lastButton.disabled = true;
  lastButton.style.cursor = "default";
  front.src = "../../assets/images/button_paginator_left2.png";
  front.style.transform = "rotate(-180deg)";
  frontFront.src = "../../assets/images/button_paginator_left1.png";
  frontFront.style.transform = "rotate(-180deg)";
  // pageNumberSpan.innerText = `${numberPage}`
  prevButton.classList.add("button-arow_active");
  button_left.classList.add("button-arow_active");
  prevButton.disabled = false;
  prevButton.style.cursor = "pointer";
  back.src = "../../assets/images/button_paginator_right1.png";
  back.style.transform = "rotate(-180deg)";
  backBack.src = "../../assets/images/button_paginator_right2.png";
  backBack.style.transform = "rotate(-180deg)";
  firstButton.disabled = false;
  firstButton.style.cursor = "pointer";
};

console.log("макс страниц - ", countPages);
console.log("текущ страниц - ", page);

buttonActive.addEventListener("click", function nex() {
  nextPage();
  /* numberPage++; */
  if (page + 1 == countPages) {
    console.log("last page");
    pageNumberSpan.innerText = `${page + 1}`;
    button_right.classList.remove("button-arow_active");
    lastButton.classList.remove("button-arow_active");
    nextButton.disabled = true;
    nextButton.style.cursor = "default";
    lastButton.disabled = true;
    lastButton.style.cursor = "default";
    front.src = "../../assets/images/button_paginator_left2.png";
    front.style.transform = "rotate(-180deg)";
    frontFront.src = "../../assets/images/button_paginator_left1.png";
    frontFront.style.transform = "rotate(-180deg)";
    firstButton.disabled = false;
    // firstButton.style.cursor = "pointer";
  } else {
    console.log("макс страниц - ", countPages);
    console.log("текущ страниц - ", numberPage);
    pageNumberSpan.innerText = `${page + 1}`;
    prevButton.classList.add("button-arow_active");
    button_left.classList.add("button-arow_active");
    prevButton.disabled = false;
    prevButton.style.cursor = "pointer";
    back.src = "../../assets/images/button_paginator_right1.png";
    back.style.transform = "rotate(-180deg)";
    backBack.src = "../../assets/images/button_paginator_right2.png";
    backBack.style.transform = "rotate(-180deg)";
    firstButton.disabled = false;
    //firstButton.style.cursor = "pointer";
  }
});

prevButton.addEventListener("click", function prev() {
  prevPage();
  /* numberPage--; */
  if (1 == page + 1) {
    console.log("start page");
    pageNumberSpan.innerText = `1`;
    button_left.classList.remove("button-arow_active");
    button_left.disabled = true;
    button_left.classList.remove("btn_prevPage");
    prevButton.classList.remove("button-arow_active");
    prevButton.disabled = true;
    prevButton.style.cursor = "default";
    button_right.classList.add("button-arow_active");
    back.src = "../../assets/images/button_paginator_left1.png";
    back.style.transform = "rotate(-360deg)";
    backBack.src = "../../assets/images/button_paginator_left2.png";
    backBack.style.transform = "rotate(-360deg)";
    lastButton.disabled = true;
    lastButton.style.cursor = "pointer";
  } else {
    console.log("макс страниц - ", countPages);
    console.log("текущ страниц - ", numberPage);
    pageNumberSpan.innerText = `${page + 1}`;
    button_right.classList.add("button-arow_active");
    nextButton.disabled = false;
    nextButton.style.cursor = "pointer";
    front.src = "../../assets/images/button_paginator_right1.png";
    front.style.transform = "rotate(-360deg)";
    frontFront.src = "../../assets/images/button_paginator_right2.png";
    frontFront.style.transform = "rotate(-360deg)";
    lastButton.classList.add("button-arow_active");
    lastButton.disabled = false;
    lastButton.style.cursor = "pointer";
  }
});

const firstPage = () => {
  sliderContainer.innerHTML = "";
  page = 0;
  for (
    let j = page * numberCardsonPage;
    j < (page + 1) * numberCardsonPage;
    j++
  ) {
    console.log("then3", j);
    card = createCardTemplate(j);
    card.innerHTML = `
      <img class="card-image" src="${petsAllCards[j].img}" alt="${petsAllCards[j].name}">    
      <span class="card-title">${petsAllCards[j].name}</span>
      <div class="card-button"><button class="button_secondary">Learn more</button></div>`;
    sliderContainer.appendChild(card);

    card.addEventListener("click", function () {
      const idx = this.dataset.index;
      document.body.style.overflow = "hidden";
      createModalWindow(idx);
    });
  }
};

firstButton.onclick = () => {
  firstPage();
  numberPage = 1;
  pageNumberSpan.innerText = `1`;
  firstButton.style.cursor = "default";
  button_left.classList.remove("button-arow_active");
  button_left.disabled = true;
  button_left.style.cursor = "default";
  backBack.style.cursor = "default";
  button_left.classList.remove("btn_prevPage");
  prevButton.classList.remove("button-arow_active");
  prevButton.disabled = true;
  prevButton.style.cursor = "default";
  button_right.classList.add("button-arow_active");
  back.src = "../../assets/images/button_paginator_left2.png";
  back.style.transform = "rotate(-360deg)";
  backBack.src = "../../assets/images/button_paginator_left1.png";
  backBack.style.transform = "rotate(-360deg)";
  backBack.style.cursor = "default";
  nextButton.disabled = false;
  nextButton.style.cursor = "pointer";
  lastButton.disabled = false;
  lastButton.style.cursor = "pointer";
  front.src = "../../assets/images/button_paginator_right1.png";
  front.style.transform = "rotate(-360deg)";
  frontFront.src = "../../assets/images/button_paginator_right2.png";
  frontFront.style.transform = "rotate(-360deg)";
  lastButton.classList.add("button-arow_active");
};
