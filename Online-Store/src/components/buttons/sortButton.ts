import IProduct from "../intefaces/IProduct"

class SortButton {
  _selector: string
  _content: string;
  _data: IProduct[]
  _parent: HTMLDivElement
  _callback: Function

  constructor(selector: string, content: string, data: IProduct[], parent: HTMLDivElement, callback?: Function) {
    this._selector = selector
    this._content = content
    this._data = data
    this._parent = parent 
    this._callback = callback   
  }

  render() {
    const sortButton = document.createElement('button');
    sortButton.className = this._selector;
    sortButton.innerHTML = this._content;
    this._parent.appendChild(sortButton);

    sortButton.addEventListener('click', () => {      
      this._callback()
    })
  }
}

export default SortButton;

