import ButtonMain from "./button-main";
import IButtonMain from "./interfaces/IButtonMain";

class ButtonFirst extends ButtonMain implements IButtonMain {
  constructor(content: string, selector: string, parent: HTMLDivElement) {
    super('Buy now', 'header__button-main', parent)
  }

  renderButton(): void {
    const mainBottom = document.createElement('button')
    mainBottom.classList.add(`${this.selector}`)
    mainBottom.textContent = `${this.content}`
    this.parent.appendChild(mainBottom)  
  }
}

export default ButtonFirst;
