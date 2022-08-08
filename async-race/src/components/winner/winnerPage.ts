/* eslint-disable no-unused-vars */
import Buttons from '../buttons/botton';
import ICar from '../cars/ICar';
import IWinnerItem from './IWinnerItem';
import WinnerItem from './winnerItem';

class WinnerPage {
  count: number;

  constructor() {
    this.count = 1;
    const winners = document.createElement('div');
    winners.className = 'page-winners';

    const title = document.createElement('div');
    title.className = 'title-winners';

    const page = document.createElement('div');
    page.className = 'page-winner';

    fetch('http://localhost:3000/winners')
      .then((response) => response.json())
      .then((data: IWinnerItem[]) => {
        page.innerHTML = `WINNERS ( ${data.length} )`;
      });

    title.appendChild(page);

    const pageCount = document.createElement('div');
    pageCount.className = 'page-count-winner';
    pageCount.innerHTML = `Page #${this.count}`;
    title.appendChild(pageCount);
    winners.appendChild(title);

    const table = document.createElement('div');
    table.innerHTML = `<div class='winner-table'>
                            <table>
                            <thead class='table-headers'>
                              <tr class='table-row'>
                                <th class='table-number'>№</th>
                                <th class='table-colomn'>Image of the car</th>
                                <th class='table-colomn'>Name of the car</th>
                                <th class='table-colomn'>Wins number</th>
                                <th class='table-colomn'>Best time in seconds</th>
                              </tr>
                            </thead>
                            <tbody class='table-body'>
                            </tbody>
                          </table>
                         </div>`;
    winners.appendChild(table);
    document.querySelector('.root').appendChild(winners);

    if (!localStorage.getItem('pageWinners')) {
      localStorage.setItem('pageWinners', '1');
    }

    localStorage.setItem('pageWinners', '1');
    this.getPageWinners();

    const pagination = document.createElement('div');
    pagination.className = 'winners-pagination';
    const prev = new Buttons('btn-select', pagination, 'prev', () => {
      let count = +localStorage.getItem('pageWinners');
      count -= 1;
      if (count === 1) {
        (<HTMLButtonElement>document.getElementById('win-prev')).disabled = true;
      }
      this.count = count;
      pageCount.innerHTML = `Page #${this.count}`;
      document.querySelector('.table-body').innerHTML = '';
      this.getPageWinners();
      (<HTMLButtonElement>document.getElementById('win-next')).disabled = false;

      localStorage.setItem('pageWinners', this.count.toString());
    }, 'win-prev', true);
    const next = new Buttons('btn-select', pagination, 'next', () => {
      (<HTMLButtonElement>document.getElementById('win-prev')).disabled = false;
      let count = +localStorage.getItem('pageWinners');
      count += 1;
      this.count = count;
      pageCount.innerHTML = `Page #${this.count}`;
      document.querySelector('.table-body').innerHTML = '';
      this.getPageWinners();

      localStorage.setItem('pageWinners', this.count.toString());

      fetch('http://localhost:3000/winners')
        .then((response) => response.json())
        .then((data: IWinnerItem[]) => {
          if (this.count >= Math.ceil(data.length / 10)) {
            (<HTMLButtonElement>document.getElementById('win-next')).disabled = true;
          }
        })
        .catch((err) => console.error(err));
    }, 'win-next', false);
    winners.appendChild(pagination);
  }

  getPageWinners() {
    fetch(`http://localhost:3000/winners?_page=${this.count}&_limit=10`)
      .then((response) => response.json())
      .then((data: IWinnerItem[]) => {
        data.forEach((el, ind: number) => {
          fetch(`http://localhost:3000/garage/${el.id}`)
            .then((response) => response.json())
            .then((datacar: ICar) => {
              const { color } = datacar;
              // eslint-disable-next-line no-unused-vars, max-len
              const winItem = new WinnerItem(el.id, el.name, +el.time, color, ((this.count - 1) * 10 + ind + 1));
            });
        });
      })
      .catch((err) => console.error(err));
  }
}

export default WinnerPage;
