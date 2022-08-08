/* eslint-disable no-unused-vars */
import ICar from '../cars/ICar';
import { app, newPage } from '../../index';
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
                          <input type='color' class='car-color-create' value='#00ff91'>
                          <button class='btn-car-create btn-select'>CREATE</button></div>
                       <div class='row2'>
                          <input type='text' class='car-name-update'>
                          <input type='color' class='car-color-update' value='#00ff91'>
                          <button class='btn-car-update btn-select' disabled=false>UPDATE</button></div>
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

    title.appendChild(page);

    const pageCount = document.createElement('div');
    pageCount.className = 'page-count';
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
      if (this.count < 2) {
        this.count = 1;
        (document.getElementById('prev') as HTMLButtonElement).disabled = true;
      } else {
        (document.getElementById('prev') as HTMLButtonElement).disabled = false;
      }
      newPage(this.count);
      pageCount.innerHTML = `Page #${this.count}`;
      localStorage.setItem('page', this.count.toString());
      (document.getElementById('next') as HTMLButtonElement).disabled = false;
    }, 'prev', true);

    const next = new Buttons('btn-select', paginator, 'next', () => {
      garage.innerHTML = '';
      this.count += 1;
      if (this.count > Math.ceil(len / 7)) {
        this.count -= 1;
        (document.getElementById('next') as HTMLButtonElement).disabled = true;
      }
      if (this.count > len / 7) {
        (document.getElementById('next') as HTMLButtonElement).disabled = true;
      } else {
        (document.getElementById('next') as HTMLButtonElement).disabled = false;
      }
      newPage(this.count);
      pageCount.innerHTML = `Page #${this.count}`;
      localStorage.setItem('page', this.count.toString());
      (document.getElementById('prev') as HTMLButtonElement).disabled = false;
      // prev.disabled = false;
    }, 'next');

    root.appendChild(paginator);
  }
}

export default Generator;
