import dataProd from "../../index";
import ButtonMain from "../buttons/button-main";
import LocalStorageInfo from '../cart/cartList'
import cartProductList from '../../index'


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
    shopingBag.src = 'assets/images/shopping-bag.png';
    shopingBag.className = 'shoping-bag-img'
    cart.appendChild(shopingBag)

    let count = 0;
    //const cartProductList = new LocalStorageInfo();

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
    loginUser.src = 'assets/images/Profile 1.png';
    loginUser.className = 'login-user'
    login.appendChild(loginUser);
    login.appendChild(loginSpan);
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


    const headerBottomRight = document.createElement('div');
    headerBottomRight.className = 'header-bottom-right';
    

    const headerBottomLeft = document.createElement('div');
    headerBottomLeft.className = 'header-bottom-left'

    const headerBottomLeftTitle = document.createElement('div');
    headerBottomLeftTitle.className = 'header-bottom-left_title';
    headerBottomLeftTitle.innerHTML = '<h1 class="title-main">Discover Our Latest  Products</h1><span class="subtitle">Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a product</span>'
    const headerTitleButton = document.createElement('div');
    headerTitleButton.className = 'header-title-button';

    const reviews = document.createElement('div');
    reviews.className = 'reviews-header';
    const rev1 = document.createElement('img');
    rev1.className = 'reviews-item1';
    const rev2 = document.createElement('img');
    rev2.className = 'reviews-item2';
    const rev3 = document.createElement('img');
    rev3.className = 'reviews-item3';
    const rev4 = document.createElement('img');
    rev4.className = 'reviews-item4';

    rev1.src = 'assets/images/001.png';
    rev2.src = 'assets/images/002.png';
    rev3.src = 'assets/images/003.png';
    rev4.src = 'assets/images/004.png';
    reviews.appendChild(rev4);
    reviews.appendChild(rev3);
    reviews.appendChild(rev2);
    reviews.appendChild(rev1);

    const reviewsWrap = document.createElement('div');
    reviewsWrap.className = 'reviews-wrap';
    reviewsWrap.appendChild(reviews);

    const reviewsWrapCount = document.createElement('div');
    reviewsWrapCount.className = 'reviews-wrap-count';
    reviewsWrapCount.textContent = '15k Well Reviews'


    headerBottomLeft.appendChild(headerBottomLeftTitle);
    headerBottomLeft.appendChild(headerTitleButton);
    headerBottomLeft.appendChild(reviewsWrap);
    reviewsWrap.appendChild(reviewsWrapCount);
    headerBottom.appendChild(headerBottomLeft);
    headerBottom.appendChild(headerBottomRight);

    const button = new ButtonMain('Bye now', 'button', headerTitleButton, count);
    button.renderButton();

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