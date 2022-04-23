const wrappermainpages = document.querySelector(".wrapper_mainpages");
const owerlof = document.querySelector(".owerlof");
const navMenu = document.querySelector(".nav_main-pages");
const toggleButton = document.querySelector(".toggleButton");

const logo_burger = document.querySelector(".logo_burger");

function toggleMenu() {
  const windowWidth = window.innerWidth;
  if (windowWidth < 768) {
    navMenu.classList.toggle("burger-menu_active");
    toggleButton.classList.toggle("active_menu");

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
}

owerlof.addEventListener("click", () => {
  closeMenu();
});

navMenu.addEventListener("click", () => {
  closeMenu();
});

window.addEventListener("resize", function () {
  if (window.innerWidth > 767) {
    closeMenu();
  }
});

window.addEventListener("resize", function () {
  if (window.innerWidth < 768) {
    document.getElementById("number").src =
      "../../assets/images/credit-card-content_320.png";
  }
  if (window.innerWidth > 767) {
    document.getElementById("number").src =
      "../../assets/images/credit-card-content.png";
  }
});

const pets_cards = document.querySelectorAll(".pets_card");

const btnR = document.querySelector(".btn-right");
const btnL = document.querySelector(".btn-left");

const pets = [{
    name: "Katrine",
    img: "../../assets/images/katrine.png",
    type: "Cat",
    breed: "British Shorthair",
    description: "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
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
    description: "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
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
    description: "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
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
    description: "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
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
    description: "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
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
    description: "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
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
    description: "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
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
    description: "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    age: "8 years",
    inoculations: ["bordetella bronchiseptica", "leptospirosis"],
    diseases: ["deafness", "blindness"],
    parasites: ["lice", "fleas"],
  },
];
let count = 0;
let n = 0;


const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");
const slider = document.querySelector("#slider");
const cardsLeft = document.querySelector("#item-left");
const cardsRight = document.querySelector("#item-right");

const createCardTemplate = (i) => {
  const card = document.createElement("div");
  card.classList.add("pets_card");
  card.dataset.index = i
  return card;
};

const moveLeft = () => {
  slider.classList.add("transition-left");  
  btnRight.removeEventListener("click", moveRight);
  btnLeft.removeEventListener("click", moveLeft);
};

const moveRight = () => {
  slider.classList.add("transition-right");
  btnRight.removeEventListener("click", moveRight);
  btnLeft.removeEventListener("click", moveLeft);
  
};

btnLeft.addEventListener("click", moveLeft);
btnRight.addEventListener("click", moveRight);
let i = 0;
console.log(i);
let k = 0;
slider.querySelectorAll('.item').forEach(item => {
  item.innerHTML = ""
  
  for (let j = 0; j < 3; j++) {
    console.log(i);

    card = createCardTemplate(k);
    card.innerHTML = `
    <img class="card-image" src="${pets[k].img}" alt="${pets[k].name}" data-name="${pets[k].name}" data-description="${pets[k].description}">    
    <span class="card-title">${pets[k].name}</span>
    <div class="card-button"><button class="button_secondary">Learn more</button></div>`;
    item.appendChild(card);

    console.log(card)

    card.addEventListener('click', function() {
      console.log('this card - ', this)
      const idx = this.dataset.index;
      document.body.style.overflow = "hidden";
      createModalWindow(idx);
    })

    k++;
    if (k >= 8) {
      k = 0;
    }
  }
})


const createModalWindow = (i) => {
  console.log('index - ', i)
  const modal = document.createElement("div");
  modal.classList.add("modal-background");
  modal.innerHTML = `
  <div class="modal-window"><div class ="modal-close-button"></div>
  <div class="modal-content">        
  <img class="modal-image" src="${pets[i].img}" alt = "${pets[i].name}">
  <div class = "modal-info">
  <div class = "modal-title">${pets[i].name}</div>
  <div class = "modal-subtitle">${pets[i].type} - ${pets[i].breed}</div>
  <div class = "modal-description">${pets[i].description}</div>
  <ul class= "modal-list">
  <li class = "modal-list-item"><span class = "list-span-title">Age:</span><span class = "list-span-info"> ${pets[i].age}</span></li>
  <li class = "modal-list-item"><span class = "list-span-title">Inoculations:</span><span class = "list-span-info"> ${pets[i].inoculations}</span></li>
  <li class = "modal-list-item"><span class = "list-span-title">Diseases:</span><span class = "list-span-info"> ${pets[i].diseases}</span></li>
  <li class = "modal-list-item"><span class = "list-span-title">Parasites:</span><span class = "list-span-info"> ${pets[i].parasites}</span></li>
  </ul>
  </div>
  </div>
  </div>`

  document.body.append(modal);
  const modalCloseButton = document.querySelectorAll('.modal-close-button')
  modalCloseButton.forEach(el => {
  el.addEventListener('click', function () {
    document.body.style.overflow = "visible"
    document.body.removeChild(modal)
  })
})

const modalBackground = document.querySelectorAll('.modal-background');
modalBackground.forEach(el => {
  el.addEventListener('click', function () {
    document.body.style.overflow = "visible"
    document.body.removeChild(modal)
  })
})

const modalClose = document.querySelector('.modal-close-button')
modalBackground.forEach(el => {
  el.onmouseover = function() {
    modalCloseButton.forEach(item => {
      item.classList.add('close-button-hover')
    })   
      console.log('hover')      
  }

  el.onmouseout = function() {
    modalCloseButton.forEach(item => {
        
        item.classList.remove('close-button-hover')
        console.log('nothover') 
      
    })       
  }
})

}


let chengepart;
slider.addEventListener("animationend", (animationEvent) => {

  if (animationEvent.animationName === "move-left") {
    slider.classList.remove("transition-left");
    chengepart = cardsLeft;
    const itemActive =document.querySelector("#item-centr");  

    itemActive.innerHTML = cardsLeft.innerHTML;
    itemActive.querySelectorAll('.pets_card').forEach(card => {
      card.addEventListener('click', function() {
        console.log('this card - ', this)
      const idx = this.dataset.index;
      document.body.style.overflow = "hidden";
      createModalWindow(idx);
      })
    })

  } else {
    slider.classList.remove("transition-right");
    chengepart = cardsRight;
    const itemActive =document.querySelector("#item-centr");  


    itemActive.innerHTML = cardsRight.innerHTML;
    itemActive.querySelectorAll('.pets_card').forEach(card => {
      card.addEventListener('click', function() {
        console.log('this card - ', this)
      const idx = this.dataset.index;
      document.body.style.overflow = "hidden";
      createModalWindow(idx);
      })
    })

  }

  chengepart.innerHTML = "";
  let card;

  for (let j = 0; j < 3; j++) {
    console.log(i);

    card = createCardTemplate(i);
    card.innerHTML = `
    <img class="card-image" src="${pets[i].img}" alt="${pets[i].name}" data-name="${pets[i].name}" data-description="${pets[i].description}">    
    <span class="card-title">${pets[i].name}</span>
    <div class="card-button"><button class="button_secondary">Learn more</button></div>`;
    chengepart.appendChild(card);

    console.log(card)

    card.addEventListener('click', function() {
      console.log('this card - ', this)
      const idx = this.dataset.index;
      document.body.style.overflow = "hidden";
      createModalWindow(idx);
    })

    i++;
    if (i >= 8) {
      i = 0;
    }
  }

  btnLeft.addEventListener("click", moveLeft);
  btnRight.addEventListener("click", moveRight);
});

const modalWindow = document.querySelectorAll(".pets_card");


let cardButton
//console.log(cardButton)



slider.addEventListener("click", (event) => {
  if (event.target.classList.contains("activated")) {
    event.target.classList.remove("activated");
  } else if (event.target.classList.contains("card")) {
    event.target.classList.add("activated");

  }

  //document.body.style.overflow = "hidden"

  
 /*  modalCloseButton.forEach(el => {
    el.onclick = () => {
      document.body.style.overflow = "visible"
      modWin[0].style.display = "none";
      modWin[1].style.display = "none";
      modWin[2].style.display = "none";
      modWin.forEach(it => {
        document.body.removeChild(modal)
      })
    }
  }) */
  

})



/* const modalCloseButton = document.querySelectorAll('.modal-close-button')
modalCloseButton.forEach(el => {
  el.addEventListener('click', function () {
    document.body.style.overflow = "visible"
    document.body.remove(modal)
  })
})
 */
