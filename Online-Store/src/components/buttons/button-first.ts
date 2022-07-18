import ButtonMain from "./button-main";

class ButtonFirst extends ButtonMain {
  constructor(content: string, selector: string, parent: HTMLDivElement, data: any) {
    super('Bye now', 'button-main', parent, '' )
  }

  renderButton() {
    const mainBottom = document.createElement('button')
    mainBottom.classList.add(`${this._selector}`)
    mainBottom.textContent = `${this._content}`
    this._parent.appendChild(mainBottom)  
  }
}

export default ButtonFirst;
