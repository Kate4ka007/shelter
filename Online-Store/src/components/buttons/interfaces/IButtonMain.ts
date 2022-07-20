import IProduct from '../../interfaces/IProduct';

interface IButtonMain {
  content: string;

  selector: string;

  parent: HTMLDivElement;

  data: IProduct;

  renderButton(): void;
  hangleSetStorage(el: this, data: IProduct): void
}

export default IButtonMain;