import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '1c385e235cf54c4993dfb82077ca3a69', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
