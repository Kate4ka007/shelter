import IMain from "./interfaces/IMain";

class Main implements IMain {
  public render(): void {
    const cards = document.createElement('div');
    cards.className = 'main__cards';

    const filters = document.createElement('div');
    filters.className = 'root__filters';
    const main = document.createElement('main')
    main.className = 'main';
    main.appendChild(cards);
    main.appendChild(filters);    
    document.querySelector('.root').appendChild(main);   
  }
}

export default Main;