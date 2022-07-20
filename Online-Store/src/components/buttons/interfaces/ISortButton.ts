import IProduct from '../../interfaces/IProduct';

interface ISortButton {
  selector: string;

  content: string;

  data: IProduct[];

  parent: HTMLDivElement;

  callback: Function;

  render(): void; 
}

export default ISortButton;