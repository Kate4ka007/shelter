/* eslint-disable no-unused-vars */
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';

interface ICar {
  id: number;
  name: string;
  color: string;
}

let garage: Array<ICar>;

fetch('http://localhost:3000/garage')
  .then((response) => response.json())
  .then((data: ICar[]) => {
    garage = data;
  });

class Car {
  id: number;

  name: string;

  color: string;

  constructor(id: number, name: string, color: string) {
    this.id = id;
    this.name = name;
    this.color = color;

    const car = document.createElement('div');
    car.className = 'car';
    car.id = id.toString();
    car.textContent = name;
    car.style.background = color;
    document.body.appendChild(car);

    car.addEventListener('click', () => {
      fetch(`http://localhost:3000/garage/${this.id}`, { method: 'DELETE' })
        .then((response) => response.json())
        .then((data: ICar[]) => {
          console.log(data);
        });
      car.remove();
    });
  }
}

const dat = async () => {
  garage.forEach((element: ICar) => {
    const car = new Car(element.id, element.name, element.color);
  });
};

setTimeout(() => {
  dat();
}, 1000);
