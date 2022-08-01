/* eslint-disable no-unused-vars */
/* import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; */
import './styles.scss';
import Controller from './components/controller/controller';
import Model from './components/model/model';
import View from './components/view/view';
import ICar from './components/cars/ICar';
import Car from './components/cars/car';

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

export const getCountCars = async (): Promise<number> => {
  const response = await fetch('http://localhost:3000/garage');
  const data = await response.json();
  console.log(data.length);
  return data.length;
};

export const countCars = async (): Promise<number> => {
  console.log(await getCountCars());
  const dat = await getCountCars();
  return dat;
};

const getPage = async (pageNumber: number = 1): Promise<ICar[]> => {
  const response = await fetch(`http://localhost:3000/garage?_page=${pageNumber}&_limit=7`);
  const data = await response.json();
  return data;
};

export const createPage = async (num:number = 1): Promise<ICar[]> => {
  const page = await getPage(num);
  console.log(page);
  return page;
};

export const newPage = (num: number = 1): void => {
  const data = createPage(num);
  data.then((page) => {
    page.forEach((element) => {
      const car = new Car(element.id, element.name, element.color);
    });
  });
};

export const getRandome = () => Math.floor(Math.random() * (9 - 0 + 1) + 0);

export default startCar;
