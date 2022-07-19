class Footer {
  render() {
    const footer = document.createElement('footer');
    footer.className = 'footer';
    const content = document.createElement('div');
    content.className = 'footer__content';
    const rowtop = document.createElement('div');
    rowtop.className = 'footer__row-top';
    const rowmiddle = document.createElement('div');
    rowmiddle.className = 'footer__row-middle';
    const rowbottom = document.createElement('div');
    rowbottom.className = 'footer__row-bottom';

    const news = document.createElement('div');
    news.className = 'footer__news';
    const service = document.createElement('div');
    service.className = 'footer__service';
    const about = document.createElement('div');
    about.className = 'footer__about';
    const helps = document.createElement('div');
    helps.className = 'footer__helps';

    const span = document.createElement('span');
    span.className = 'footer__span-top';
    span.textContent = 'Ready to get started?';
    const footerButton = document.createElement('button');
    footerButton.textContent = 'Get started';
    footerButton.className = 'footer__button';

    rowtop.appendChild(span);
    rowtop.appendChild(footerButton);

    const description = document.createElement('div');
    description.className = 'footer__description';
    description.textContent = `Subscribe to our
    Website`
    const form = document.createElement('div');
    form.className = 'footer__form';

    const input = document.createElement('input');
    input.type = 'email';
    input.placeholder = 'Email address'
    input.className = 'footer__email';
    const submit = document.createElement('button');
    submit.type = 'submit';
    submit.textContent = '>'
    submit.className = 'footer__submit';

    form.appendChild(input);
    form.appendChild(submit);

    news.appendChild(description);
    news.appendChild(form);

    service.innerHTML = `<ul class="footer__items">
                          <li class="footer__item">Services</li>
                          <li class="footer__item">Email Marketing</li>
                          <li class="footer__item">Campaigns</li>
                          <li class="footer__item">Branding</li>
                          <li class="footer__item">Offline</li>                          
                        </ul>`

    about.innerHTML = `<ul class="footer__items">
                          <li class="footer__item">About</li>
                          <li class="footer__item">Our Story</li>
                          <li class="footer__item">Benefits</li>
                          <li class="footer__item">Team</li>
                          <li class="footer__item">Careers</li>                          
                        </ul>` 
                        
    helps.innerHTML = `<ul class="footer__items">
                        <li class="footer__item">Help</li>
                        <li class="footer__item">FAQs</li>
                        <li class="footer__item">Contact Us</li>                     
                      </ul>`
                      
    const terms = document.createElement('div');
    terms.className = 'footer__terms';
    terms.textContent = 'Terms & Conditions';
    rowbottom.appendChild(terms);    
    
    const policy = document.createElement('div');
    policy.className = 'footer__policy';
    policy.textContent = 'Privacy Policy';
    rowbottom.appendChild(policy); 

    const year = document.createElement('div');
    year.className = 'footer__year';
    year.textContent = '2022';
    rowbottom.appendChild(year);

    const social = document.createElement('div');
    social.className = 'footer__social';
    social.innerHTML = `<a href="https://github.com/Kate4ka007" target="_blank"><img class="facebook" src="assets/images/facebook.png" alt=''></a>
                        <a href="https://github.com/Kate4ka007" target="_blank"><img class="twitter" src="assets/images/twitter.png" alt=''></a>
                        <a href="https://github.com/Kate4ka007" target="_blank"><img class="instagram" src="assets/images/instagram.png" alt=''></a>
                        <a href="https://github.com/Kate4ka007" target="_blank"><img class="github" src="assets/images/gitHub.png" alt=''></a>
                        <a href="https://rs.school/" target="_blank"><img class="rsshool" src="assets/images/logo-rs.svg" alt='' width="28px"></a>`;
    rowbottom.appendChild(social); 

    footer.appendChild(content);
    content.appendChild(rowtop);
    content.appendChild(rowmiddle);
    content.appendChild(rowbottom);
    rowmiddle.appendChild(news);
    rowmiddle.appendChild(service);
    rowmiddle.appendChild(about);
    rowmiddle.appendChild(helps);

    document.querySelector('.root').appendChild(footer)
  }
}

export default Footer;