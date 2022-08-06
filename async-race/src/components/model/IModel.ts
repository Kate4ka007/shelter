import ICar from '../cars/ICar';

interface IModel {
  pageNumber: number;

  getDataonPage(): Promise <ICar[]>
}

export default IModel;
