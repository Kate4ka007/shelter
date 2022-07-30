/* eslint-disable no-unused-vars */
/* import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; */
import './styles.scss';
import Controller from './components/controller/controller';
import Model from './components/model/model';
import View from './components/view/view';

const app = new Controller(new Model(), new View());

const startCar = (car: HTMLElement, id: number) => {
  let animationStart: number;
  let requestId: number = id;
  console.log(id);

  function animate(timestamp: number) {
    if (!animationStart) {
      animationStart = timestamp;
    }
    const progress = timestamp - animationStart;
    // eslint-disable-next-line no-param-reassign
    car.style.transform = `translateX(${progress * 0.3}px)`;
    const x = car.getBoundingClientRect().x + 100;
    if (x <= window.innerWidth - 25) {
      window.requestAnimationFrame(animate);
    } else {
      window.cancelAnimationFrame(requestId);
    }
  }
  function startAnimation() {
    requestId = window.requestAnimationFrame(animate);
  }
  startAnimation();

  const stop = document.querySelectorAll('.btn-stop');
  stop.forEach((el) => {
    el.addEventListener('click', () => {
      console.log('ttt');

      requestId = window.requestAnimationFrame(animate);
      window.cancelAnimationFrame(requestId);
    });
  });
};

/* fetch('http://localhost:3000/garage?_page=1&_limit=7')
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  }); */

export const getRandome = () => Math.floor(Math.random() * (9 - 0 + 1) + 0);

export default startCar;
