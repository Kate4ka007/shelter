/* eslint-disable no-unused-vars */
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';
import Controller from './components/controller/controller';
import Model from './components/model/model';
import View from './components/view/view';
import ICar from './components/cars/ICar';
import Car from './components/cars/car';
import Winner from './components/winner/winner';

interface Engine {
  velocity: number;
  distance: number;
}

const base = 'http://localhost:3000';

const garage = `${base}/garage`;
const engine = `${base}/engine`;
const winners = `${base}/winners`;

export const startEngine = async (id: number): Promise<Engine> => (await fetch(`${engine}?id=${id}&status=started`, { method: 'PATCH' })).json();

export const stopEngine = async (id: number): Promise<Engine> => (await fetch(`${engine}?id=${id}&status=stopped`)).json();

export const drive = async (id: number): Promise<{ success: boolean }> => {
  const response = await fetch(`${engine}?id=${id}&status=drive`).catch();

  return response.status !== 200 ? { success: false } : { ...(await response.json()) };
};

export const app = new Controller(new Model(), new View());

const startCar = (car: HTMLElement, id: number, time: number, name: string) => {
  let animationStart: number;
  let requestId: number = id;
  console.log(id);

  function animate(timestamp: number) {
    if (!animationStart) {
      animationStart = timestamp;
    }
    const progress = timestamp - animationStart;

    // eslint-disable-next-line no-param-reassign
    car.style.transform = `translateX(${progress * (time / 400)}px)`;
    const x = car.getBoundingClientRect().x + 100;
    if (x <= window.innerWidth - 40) {
      window.requestAnimationFrame(animate);
    } else {
      window.cancelAnimationFrame(requestId);
      if (!localStorage.getItem('winnerCar')) {
        localStorage.setItem('winnerCar', id.toString());
        console.log(`${id} is winner`);

        fetch(`http://localhost:3000/garage/${id}`)
          .then((response) => response.json())
          .then((data: ICar) => {
            const win = new Winner(id.toString(), 'winner', data.name);
          })
          .catch((err) => console.error(err));
      }
    }
  }
  function startAnimation() {
    requestId = window.requestAnimationFrame(animate);
  }
  startAnimation();
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

document.body.addEventListener('click', async (el) => {
  if ((el.target as HTMLElement).classList.contains('btn-stop')) {
    // window.cancelAnimationFrame(1);

    console.log('hi');
  }
});

(document.querySelector('.btn-car-race') as HTMLButtonElement).addEventListener('click', () => {
  (document.querySelector('.btn-car-race') as HTMLButtonElement).disabled = true;
  document.querySelectorAll('.car').forEach((el: HTMLElement) => {
    localStorage.removeItem('winnerCar');
    const id = +el.id;
    const vel = startEngine(id);
    vel.then((data) => {
      // eslint-disable-next-line no-use-before-define
      startCar(el, id, data.velocity, 'car');
      console.log(data.distance);
      console.log(data.velocity);
    }).catch((err: string) => console.log(err));
  });
});

(document.querySelector('.btn-car-reset') as HTMLButtonElement).addEventListener('click', () => {
  (document.querySelector('.btn-car-race') as HTMLButtonElement).disabled = false;
  document.querySelectorAll('.car').forEach((el: HTMLElement) => {
    localStorage.removeItem('winnerCar');
    // eslint-disable-next-line no-param-reassign
    el.style.transform = 'translateX(0px)';
  });
});

export const getRandome = () => Math.floor(Math.random() * (9 - 0 + 1) + 0);

export default startCar;
