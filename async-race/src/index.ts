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
if (!localStorage.getItem('page')) {
  localStorage.setItem('page', '1');
}

if (!localStorage.getItem('once')) {
  fetch('http://localhost:3000/winners/1', { method: 'DELETE' })
    .then((response) => response.json())
    .then((datas: ICar[]) => {
      console.log(datas);
    });
  localStorage.setItem('once', 'false');
}

const startCar = (car: HTMLElement, id: number, time: number, name: string) => {
  let animationStart: number;
  let requestId: number = id;
  function animate(timestamp: number) {
    if (!animationStart) {
      animationStart = timestamp;
    }
    const progress = timestamp - animationStart;

    // eslint-disable-next-line no-param-reassign
    car.style.transform = `translateX(${progress * (time / 400)}px)`;
    const x = car.getBoundingClientRect().x + 100;
    let marg = 45;
    if (window.innerWidth <= 600) {
      marg = 10;
    }
    if (x <= window.innerWidth - marg) {
      window.requestAnimationFrame(animate);
    } else {
      window.cancelAnimationFrame(requestId);

      localStorage.setItem('finishTime', JSON.stringify(new Date()));

      const start = new Date(JSON.parse(localStorage.getItem('startTime'))).getTime();
      const end = new Date(JSON.parse(localStorage.getItem('finishTime'))).getTime();
      const timeWin = (end - start) / 1000;
      localStorage.setItem('winnerTime', timeWin.toString());

      if (!localStorage.getItem('winnerCar')) {
        localStorage.setItem('winnerCar', id.toString());
        console.log(`${id} is winner`);

        fetch(`http://localhost:3000/garage/${id}`)
          .then((response) => response.json())
          .then((data: ICar) => {
            const win = new Winner(id.toString(), 'winner', data.name);
            if (localStorage.getItem(data.name)) {
              const num = +(localStorage.getItem(data.name));
              localStorage.setItem(data.name, (num + 1).toString());
            } else {
              localStorage.setItem(data.name, '1');
            }

            if (!localStorage.getItem(`${data.name}-best`)) {
              const arr = [];
              arr.push(timeWin);
              localStorage.setItem(`${data.name}-best`, JSON.stringify(arr));
            } else {
              const arr = JSON.parse(localStorage.getItem(`${data.name}-best`));
              arr.push(timeWin);
              localStorage.setItem(`${data.name}-best`, JSON.stringify(arr));
            }
            const arr = JSON.parse(localStorage.getItem(`${data.name}-best`)).length;
            fetch('http://localhost:3000/winners', {
              method: 'POST',
              body: JSON.stringify({ id: data.id, wins: arr, time: +(localStorage.getItem('winnerTime')) }),
              headers: {
                'Content-Type': 'application/json',
              },
            });
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
  return data.length;
};

export const countCars = async (): Promise<number> => {
  const dat = await getCountCars();
  return dat;
};

const getPage = async (pageNumber: number): Promise<ICar[]> => {
  const response = await fetch(`http://localhost:3000/garage?_page=${pageNumber}&_limit=7`);
  const data = await response.json();
  return data;
};

export const createPage = async (num:number): Promise<ICar[]> => {
  const page = await getPage(num);
  console.log(page);
  return page;
};

export const newPage = (num: number = 1): void => {
  (document.querySelector('.page-garage') as HTMLDivElement).innerHTML = '';
  const data = createPage(num);
  data.then((page) => {
    page.forEach((element) => {
      const car = new Car(element.id, element.name, element.color);
    });
  });
};

(document.querySelector('.btn-car-race') as HTMLButtonElement).addEventListener('click', () => {
  const startTime = new Date();
  localStorage.setItem('startTime', JSON.stringify(startTime));
  (document.querySelector('.btn-car-race') as HTMLButtonElement).disabled = true;
  document.querySelectorAll('.car').forEach((el: HTMLElement) => {
    localStorage.removeItem('winnerCar');
    const id = +el.id;
    const vel = startEngine(id);
    vel.then((data) => {
      // eslint-disable-next-line no-use-before-define
      startCar(el, id, data.velocity, 'car');
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
