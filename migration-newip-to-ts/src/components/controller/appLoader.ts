import Loader from './loader';

class AppLoader extends Loader {
  constructor() {
    super('https://nodenews.herokuapp.com/', {
      apiKey: '6eac38185826447e931538f36af260a3',
    });
  }
}

export default AppLoader;
