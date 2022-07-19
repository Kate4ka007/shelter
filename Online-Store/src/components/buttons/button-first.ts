import ButtonMain from "./button-main";

class ButtonFirst extends ButtonMain {
  constructor(content: string, selector: string, parent: HTMLDivElement) {
    super('Buy now', 'header__button-main', parent)
  }

  renderButton() {
    const mainBottom = document.createElement('button')
    mainBottom.classList.add(`${this.selector}`)
    mainBottom.textContent = `${this.content}`
    this.parent.appendChild(mainBottom)  
  }
}

export default ButtonFirst;
