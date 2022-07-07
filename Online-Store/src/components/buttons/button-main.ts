class ButtonMain {  
  _content: string;
  _selector: string;
  _parent: HTMLDivElement;
  

  constructor(content: string, selector: string, parent: HTMLDivElement) {    
    this._content = content
    this._selector = selector 
    this._parent = parent  
  }

  renderButton() {
    const mainBottom = document.createElement('button')
    mainBottom.classList.add(`${this._selector}`)
    mainBottom.textContent = `${this._content}`
    this._parent.appendChild(mainBottom)   
  }
}

export default ButtonMain;

