/* eslint-disable no-unused-vars */
import ICar from '../cars/ICar';
import { newPage } from '../../index';
import Buttons from '../buttons/botton';

class Generator {
  count: number;

  constructor(count: number) {
    this.count = count;
    const root = document.createElement('div');
    root.className = 'root';
    const panel = document.createElement('div');
    panel.className = 'panel';
    panel.innerHTML = `<div class='row1'>
                          <input type='text' class='car-name-create'>
                          <input type='color' class='car-color-create'>
                          <button class='btn-car-create btn-select'>CREATE</button></div>
                       <div class='row2'>
                          <input type='text' class='car-name-update'>
                          <input type='color' class='car-color-update'>
                          <button class='btn-car-update btn-select'>UPDATE</button></div>
                       <div class='row3'>
                          <button class='btn-car-race btn-select'>RACE</button>
                          <button class='btn-car-reset btn-select'>RESET</button>
                          <button class='btn-car-ceneratecars btn-select'>GENERATE CARS</button></div>`;

    const title = document.createElement('div');
    title.className = 'title';

    const page = document.createElement('div');
    page.className = 'page-type';

    let len: number;
    fetch('http://localhost:3000/garage')
      .then((response) => response.json())
      .then((data: ICar[]) => {
        len = data.length;
        page.innerHTML = `GARAGE ( ${data.length} )`;
      });

    // page.innerHTML = `GARAGE ( ${4} )`;
    title.appendChild(page);

    const pageCount = document.createElement('div');
    pageCount.innerHTML = `Page #${this.count}`;
    title.appendChild(pageCount);

    document.body.appendChild(root);
    root.appendChild(panel);
    root.appendChild(title);
    const garage = document.createElement('div');
    garage.className = 'page-garage';
    root.appendChild(garage);

    const paginator = document.createElement('div');
    paginator.className = 'paginator';

    const prev = new Buttons('btn-select', paginator, 'prev', () => {
      garage.innerHTML = '';
      this.count -= 1;
      if (this.count < 1) {
        this.count = 1;
      }
      newPage(this.count);
      pageCount.innerHTML = `Page #${this.count}`;
    });
    const next = new Buttons('btn-select', paginator, 'next', () => {
      garage.innerHTML = '';
      this.count += 1;
      if (this.count > len / 7 + 1) {
        this.count -= 1;
      }
      newPage(this.count);
      pageCount.innerHTML = `Page #${this.count}`;
    });

    root.appendChild(paginator);
  }
}

export default Generator;
