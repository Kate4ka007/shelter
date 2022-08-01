class Buttons {
  selector: string;

  parent: HTMLElement;

  content: string;

  callback: () => void;

  disabled: boolean;

  constructor(selector: string, parent: HTMLElement, content: string, callback?: ()=> void) {
    this.selector = selector;
    this.parent = parent;
    this.content = content;
    this.callback = callback;
    this.disabled = false;

    const button = document.createElement('button');
    button.classList.add(this.selector);
    button.textContent = this.content;
    button.disabled = this.disabled;
    this.parent.appendChild(button);

    button.addEventListener('click', () => {
      this.callback();
    });
  }
}

export default Buttons;
