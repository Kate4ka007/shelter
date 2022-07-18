import IProduct from "../intefaces/IProduct"

class SortButton {
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

  render() {
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
