/*
const petsCard1 = document.querySelector('.pets_card1');
const petsCard2 = document.querySelector('.pets_card2');
const petsCard3 = document.querySelector('.pets_card3');

const buttonSecondary1 = document.querySelector('.button_secondary1');
const buttonSecondary2 = document.querySelector('.button_secondary2');
const buttonSecondary3 = document.querySelector('.button_secondary3');

petsCard1.addEventListener('mouseover',() => {
    buttonSecondary1.style.backgroundColor = "#fddcc4";
    petsCard1.style.cursor = 'pointer';
});
petsCard1.addEventListener('mouseout', () => {
    buttonSecondary1.style.background = "none";
    petsCard1.style.cursor = 'default';
});
petsCard2.addEventListener('mouseover',() => {
    buttonSecondary2.style.backgroundColor = "#fddcc4";
    petsCard2.style.cursor = 'pointer';
});
petsCard2.addEventListener('mouseout', () => {
    buttonSecondary2.style.background = "none";
    petsCard2.style.cursor = 'default';
});
petsCard3.addEventListener('mouseover',() => {
    buttonSecondary3.style.backgroundColor = "#fddcc4";
    petsCard3.style.cursor = 'pointer';
});
petsCard3.addEventListener('mouseout', () => {
    buttonSecondary3.style.background = "none";
    petsCard3.style.cursor = 'default';
});
console.log('100/100:\nСоздана страница main +60\nСоздана страница our pets +40');
*/


const wrappermainpages = document.querySelector('.wrapper_mainpages')
const owerlof = document.querySelector('.owerlof')
const navMenu = document.querySelector('.nav_main-pages')
const toggleButton = document.querySelector('.toggleButton')

const logo_burger = document.querySelector('.logo_burger')

function toggleMenu() {
    const windowWidth = window.innerWidth;
    if(windowWidth < 768) {        
        navMenu.classList.toggle('burger-menu_active')
        toggleButton.classList.toggle('active_menu')
        owerlof.classList.toggle('hide')
        logo_burger.style.display = 'block'    
    }
    
}
toggleButton.addEventListener('click', () => {
    toggleMenu();
    
})

function closeMenu() {
    owerlof.classList.remove('hide')
    navMenu.classList.remove('burger-menu_active')
    toggleButton.classList.remove('active_menu')
    logo_burger.style.display = 'none' 
}

owerlof.addEventListener('click', () => {
    closeMenu()
})

navMenu.addEventListener('click', () => {
   closeMenu()
})


window.addEventListener('resize',function(){
    if(window.innerWidth > 767) {
        closeMenu()
    }
});

window.addEventListener('resize',function(){
if(window.innerWidth < 768) {
    document.getElementById('number').src = "../../assets/images/credit-card-content_320.png"
}
if(window.innerWidth > 767) {
    document.getElementById('number').src = "../../assets/images/credit-card-content.png"
}})


const pets_cards = document.querySelectorAll('.pets_card')

const btnR = document.querySelector('.btn-right')
const btnL = document.querySelector('.btn-left')

/*
const pets = [
    {
      "name": "Jennifer",
      "img": "../../assets/images/jennifer.png",
      "type": "Dog",
      "breed": "Labrador",
      "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      "age": "2 months",
      "inoculations": ["none"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Sophia",
      "img": "../../assets/images/sophia.png",
      "type": "Dog",
      "breed": "Shih tzu",
      "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      "age": "1 month",
      "inoculations": ["parvovirus"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Woody",
      "img": "../../assets/images/woody.png",
      "type": "Dog",
      "breed": "Golden Retriever",
      "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      "age": "3 years 6 months",
      "inoculations": ["adenovirus", "distemper"],
      "diseases": ["right back leg mobility reduced"],
      "parasites": ["none"]
    },
    {
      "name": "Scarlett",
      "img": "../../assets/images/scarlett.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      "age": "3 months",
      "inoculations": ["parainfluenza"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Katrine",
      "img": "../../assets/images/katrine.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
      "age": "6 months",
      "inoculations": ["panleukopenia"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Timmy",
      "img": "../../assets/images/timmy.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
      "age": "2 years 3 months",
      "inoculations": ["calicivirus", "viral rhinotracheitis"],
      "diseases": ["kidney stones"],
      "parasites": ["none"]
    },
    {
      "name": "Freddie",
      "img": "../../assets/images/freddie.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      "age": "2 months",
      "inoculations": ["rabies"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Charly",
      "img": "../../assets/images/charly.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      "age": "8 years",
      "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
      "diseases": ["deafness", "blindness"],
      "parasites": ["lice", "fleas"]
    }
  ]
let count = 0;
let n = 0
btnR.addEventListener('click', () => {   
    pets_cards.forEach(el => {
        n++
        if(n > pets.length -1) {
            n = 0
        }
        if(count< 0) {
            n= n+2
        } 
        el.innerHTML = `<img  class="card-image" src="../../assets/images/${pets[n].img}" alt="${pets[n].breed}">
        <span class="card-title">${pets[n].name}</span>
        <div class="card-button"><button class="button_secondary button_secondary3">Learn more</button></div>`
      console.log(n)
      count++
    })
})

btnL.addEventListener('click', () => {
    pets_cards.forEach(el => {
     
        n--      
        if(count> 0) {
            n= n-2
        } 
        if(n<0) {
            n = pets.length -1
        }
        el.innerHTML = `<img  class="card-image" src="../../assets/images/${pets[n].img}" alt="${pets[n].breed}">
        <span class="card-title">${pets[n].name}</span>
        <div class="card-button"><button class="button_secondary button_secondary3">Learn more</button></div>`
        console.log(n)
        count = -1;
    })
})
*/