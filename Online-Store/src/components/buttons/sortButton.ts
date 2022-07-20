import IProduct from "../interfaces/IProduct"
import ISortButton from "./interfaces/ISortButton";

class SortButton implements ISortButton {
  selector: string

  content: string;

  data: IProduct[]

  parent: HTMLDivElement

  callback: Function

  constructor(selector: string, content: string, data: IProduct[], parent: HTMLDivElement, callback?: Function) {
    this.selector = selector
    this.content = content
    this.data = data
    this.parent = parent 
    this.callback = callback   
  }

  render(): void {
    const sortButton = document.createElement('button');
    sortButton.className = this.selector;
    sortButton.innerHTML = this.content;
    this.parent.appendChild(sortButton);

    sortButton.addEventListener('click', () => {      
      this.callback()
    })
  }
}

export default SortButton;
