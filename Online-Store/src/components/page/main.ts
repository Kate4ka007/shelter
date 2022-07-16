class Main {
  render() {
    const cards = document.createElement('div');
    cards.className = 'cards';

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