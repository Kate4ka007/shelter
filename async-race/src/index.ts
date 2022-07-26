import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';

let garage: any;

fetch('http://localhost:3000/garage')
  .then((response) => response.json())
  .then((data) => {
    garage = data;
  });

const dat = async () => {
  console.log(garage[0].name);
};

setTimeout(() => {
  dat();
}, 1000);
