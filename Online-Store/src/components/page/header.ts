class Header {
  render() {
    const header = document.createElement('div');
    header.className = 'header';

    const headerTop = document.createElement('div');
    headerTop.className = 'header-top';

    const logo = document.createElement('div');
    logo.className = 'logo';
    const logoSpanFirst = document.createElement('span')
    logoSpanFirst.className = 'logo-span-first';
    logoSpanFirst.textContent = "Shop"
    const logoSpanSecond = document.createElement('span')
    logoSpanSecond.className = 'logo-span-second';
    logoSpanSecond.textContent = "per";
    logo.appendChild(logoSpanFirst)
    logo.appendChild(logoSpanSecond)

    const inputSearch = document.createElement('input');
    inputSearch.className = 'input-search';
    inputSearch.type = 'search';
    inputSearch.placeholder = 'Search Items'

    const cart = document.createElement('div');
    cart.className = 'cart';

    const shopingBag = document.createElement('img');
    shopingBag.src = '../../assets/images/Shopping-bag.png';
    shopingBag.className = 'shoping-bag-img'
    cart.appendChild(shopingBag)
    let count = 0;

    const cartSpan = document.createElement('span');
    cartSpan.textContent = `${count} Items Added`;
    cartSpan.className = 'cart-span';

    cart.appendChild(cartSpan)

    const login = document.createElement('div');
    login.className = 'login';
    const loginSpan = document.createElement('span');
    loginSpan.textContent = `Login or Sign Up`;
    loginSpan.className = 'login-span';

    const loginUser = document.createElement('img');
    loginUser.src = '../../assets/images/Profile 1.png';
    loginUser.className = 'login-user'
    login.appendChild(loginUser)
    login.appendChild(loginSpan)



    headerTop.appendChild(logo);
    headerTop.appendChild(inputSearch);
    headerTop.appendChild(cart);
    headerTop.appendChild(login);



    const headerNav = document.createElement('div');
    headerNav.className = 'header-nav';

    const nav = document.createElement('nav');
    nav.classList.add('nav');
    nav.innerHTML = `<ul class="list">
                      <li class="list-item">Features</li>
                      <li class="list-item">Products</li>
                      <li class="list-item">Blog</li>
                      <li class="list-item">About</li>
                     </ul>`
    headerNav.appendChild(nav);                 


    const headerBottom = document.createElement('div');
    headerBottom.className = 'header-bottom';

    header.appendChild(headerTop);
    header.appendChild(headerNav);
    header.appendChild(headerBottom);

    const root = document.querySelector('.root');
    root.appendChild(header);
  }
}



const head = new Header();  
head.render() 

// export default Header;