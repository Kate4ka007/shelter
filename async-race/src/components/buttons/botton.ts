class Buttons {
  selector: string;

  parent: HTMLElement;

  content: string;

  callback: () => void;

  disabled: boolean;

  id: string;

  // eslint-disable-next-line max-len
  constructor(selector: string, parent: HTMLElement, content: string, callback?: ()=> void, id?: string, disabled?: boolean) {
    this.selector = selector;
    this.parent = parent;
    this.content = content;
    this.callback = callback;
    this.disabled = disabled;
    this.id = id;

    const button = document.createElement('button');
    button.classList.add(this.selector);
    button.textContent = this.content;
    button.disabled = this.disabled;
    button.id = this.id;
    this.parent.appendChild(button);

    button.addEventListener('click', () => {
      this.callback();
    });
  }
}

export default Buttons;
