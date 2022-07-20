import IProduct from '../../interfaces/IProduct';
import SortType from '../../interfaces/enum';

interface IProductInt {
  dataProd: IProduct[];

  render(data: Array<IProduct>): void;
  colorCheckRender(): void;
  typeCheckRender(): void;
  yearCheckRender(): void;
  notFound(): void;
  modal(data: IProduct): void;
  sortProducts(type: SortType): void;
}

export default IProductInt;