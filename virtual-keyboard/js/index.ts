
const buttons = [
  {
    type: 'other',
    content: { ru: 'Esc', en: 'Esc' },
    altContent: { ru: 'Esc', en: 'Esc' },
    code: 'Escape',
    width: 'normal',
    row: 1,
  },
  {
    type: 'other',
    content: { ru: 'F1', en: 'F1' },
    altContent: { ru: 'F1', en: 'F1' },
    code: 'F1',
    width: 'normal',
    row: 1,
  },
  {
    type: 'other',
    content: { ru: 'F2', en: 'F2' },
    altContent: { ru: 'F2', en: 'F2' },
    code: 'F2',
    width: 'normal',
    row: 1,
  },
  {
    type: 'other',
    content: { ru: 'F4', en: 'F4' },
    altContent: { ru: 'F4', en: 'F4' },
    code: 'F4',
    width: 'normal',
    row: 1,
  },
  {
    type: 'other',
    content: { ru: 'F5', en: 'F5' },
    altContent: { ru: 'F5', en: 'F5' },
    code: 'F5',
    width: 'normal',
    row: 1,
  },
  {
    type: 'other',
    content: { ru: 'F6', en: 'F6' },
    altContent: { ru: 'F6', en: 'F6' },
    code: 'F6',
    width: 'normal',
    row: 1,
  },
  {
    type: 'other',
    content: { ru: 'F7', en: 'F7' },
    altContent: { ru: 'F7', en: 'F7' },
    code: 'F7',
    width: 'normal',
    row: 1,
  },
  {
    type: 'other',
    content: { ru: 'F8', en: 'F8' },
    altContent: { ru: 'F8', en: 'F8' },
    code: 'F8',
    width: 'normal',
    row: 1,
  },
  {
    type: 'other',
    content: { ru: 'F9', en: 'F9' },
    altContent: { ru: 'F9', en: 'F9' },
    code: 'F9',
    width: 'normal',
    row: 1,
  },
  {
    type: 'other',
    content: { ru: 'F10', en: 'F10' },
    altContent: { ru: 'F10', en: 'F10' },
    code: 'F10',
    width: 'normal',
    row: 1,
  },
  {
    type: 'other',
    content: { ru: 'F11', en: 'F11' },
    altContent: { ru: 'F11', en: 'F11' },
    code: 'F11',
    width: 'normal',
    row: 1,
  },
  {
    type: 'other',
    content: { ru: 'F12', en: 'F12' },
    altContent: { ru: 'F12', en: 'F12' },
    code: 'F12',
    width: 'normal',
    row: 1,
  },
  {
    type: 'other',
    content: { ru: 'lang', en: 'lang' },
    altContent: { ru: 'lang', en: 'lang' },
    code: 'lang',
    width: 'normal',
    row: 1,
  },


  {
    type: 'other',
    content: { ru: 'ё', en: '`' },
    altContent: { ru: 'ё', en: '~' },
    code: 'Backquote',
    width: 'normal',
    row: 2,
  },
  {
    type: 'digits',
    content: { ru: '1', en: '1' },
    altContent: { ru: '!', en: '!' },
    code: 'Digit1',
    width: 'normal',
    row: 2,
  },
  {
    type: 'digits',
    content: { ru: '2', en: '2' },
    altContent: { ru: '"', en: '@' },
    code: 'Digit2',
    width: 'normal',
    row: 2,
  },
  {
    type: 'digits',
    content: { ru: '3', en: '3' },
    altContent: { ru: '№', en: '#' },
    code: 'Digit3',
    width: 'normal',
    row: 2,
  },
  {
    type: 'digits',
    content: { ru: '4', en: '4' },
    altContent: { ru: ';', en: '$' },
    code: 'Digit4',
    width: 'normal',
    row: 2,
  },
  {
    type: 'digits',
    content: { ru: '5', en: '5' },
    altContent: { ru: '%', en: '%' },
    code: 'Digit5',
    width: 'normal',
    row: 2,
  },
  {
    type: 'digits',
    content: { ru: '6', en: '6' },
    altContent: { ru: ':', en: '^' },
    code: 'Digit6',
    width: 'normal',
    row: 2,
  },
  {
    type: 'digits',
    content: { ru: '7', en: '7' },
    altContent: { ru: '?', en: '&' },
    code: 'Digit7',
    width: 'normal',
    row: 1,
  },
  {
    type: 'digits',
    content: { ru: '8', en: '8' },
    altContent: { ru: '*', en: '*' },
    code: 'Digit8',
    width: 'normal',
    row: 2,
  },
  {
    type: 'digits',
    content: { ru: '9', en: '9' },
    altContent: { ru: '(', en: '(' },
    code: 'Digit9',
    width: 'normal',
    row: 2,
  },
  {
    type: 'digits',
    content: { ru: '0', en: '0' },
    altContent: { ru: ')', en: ')' },
    code: 'Digit0',
    width: 'normal',
    row: 2,
  },
  {
    type: 'other',
    content: { ru: '-', en: '-' },
    altContent: { ru: '_', en: '_' },
    code: 'Minus',
    width: 'normal',
    row: 2,
  },
  {
    type: 'other',
    content: { ru: '=', en: '=' },
    altContent: { ru: '+', en: '+' },
    code: 'Equal',
    width: 'normal',
    row: 2,
  },
  {
    type: 'functional',
    content: { ru: 'backspace', en: 'backspace' },
    altContent: { ru: 'backspace', en: 'backspace' },
    code: 'Delete',
    width: 'medium',
    row: 3,
  },
  {
    type: 'functional',
    content: { ru: 'Tab', en: 'Tab' },
    altContent: { ru: 'Tab', en: 'Tab' },
    code: 'Tab',
    width: 'medium',
    row: 3,
  },
  {
    type: 'letter',
    content: { ru: 'й', en: 'q' },
    altContent: { ru: 'й', en: 'q' },
    code: 'KeyQ',
    width: 'normal',
    row: 3,
  },
  {
    type: 'letter',
    content: { ru: 'ц', en: 'w' },
    altContent: { ru: 'ц', en: 'w' },
    code: 'KeyW',
    width: 'normal',
    row: 3,
  },
  {
    type: 'letter',
    content: { ru: 'у', en: 'e' },
    altContent: { ru: 'у', en: 'e' },
    code: 'KeyE',
    width: 'normal',
    row: 3,
  },
  {
    type: 'letter',
    content: { ru: 'к', en: 'r' },
    altContent: { ru: 'к', en: 'r' },
    code: 'KeyR',
    width: 'normal',
    row: 2,
  },
  {
    type: 'letter',
    content: { ru: 'е', en: 't' },
    altContent: { ru: 'е', en: 't' },
    code: 'KeyT',
    width: 'normal',
    row: 3,
  },
  {
    type: 'letter',
    content: { ru: 'н', en: 'y' },
    altContent: { ru: 'н', en: 'y' },
    code: 'KeyY',
    width: 'normal',
    row: 3,
  },
  {
    type: 'letter',
    content: { ru: 'г', en: 'u' },
    altContent: { ru: 'г', en: 'u' },
    code: 'KeyU',
    width: 'normal',
    row: 3,
  },
  {
    type: 'letter',
    content: { ru: 'ш', en: 'i' },
    altContent: { ru: 'ш', en: 'i' },
    code: 'KeyI',
    width: 'normal',
    row: 3,
  },
  {
    type: 'letter',
    content: { ru: 'щ', en: 'o' },
    altContent: { ru: 'щ', en: 'o' },
    code: 'KeyO',
    width: 'normal',
    row: 3,
  },
  {
    type: 'letter',
    content: { ru: 'з', en: 'p' },
    altContent: { ru: 'з', en: 'p' },
    code: 'KeyP',
    width: 'normal',
    row: 3,
  },
  {
    type: 'other',
    content: { ru: 'х', en: '[' },
    altContent: { ru: 'х', en: '{' },
    code: 'BracketLeft',
    width: 'normal',
    row: 3,
  },
  {
    type: 'other',
    content: { ru: 'ъ', en: ']' },
    altContent: { ru: 'ъ', en: '}' },
    code: 'BracketRight',
    width: 'normal',
    row: 3,
  },
  {
    type: 'other',
    content: { ru: '\\', en: '\\' },
    altContent: { ru: '/', en: '|' },
    code: 'Backslash',
    width: 'normal',
    row: 3,
  },
  {
    type: 'functional',
    content: { ru: 'Caps Lock', en: 'Caps Lock' },
    altContent: { ru: 'Caps Lock', en: 'Caps Lock' },
    code: 'CapsLock',
    width: 'wide',
    row: 4,
  },
  {
    type: 'letter',
    content: { ru: 'ф', en: 'a' },
    altContent: { ru: 'ф', en: 'a' },
    code: 'KeyA',
    width: 'normal',
    row: 4,
  },
  {
    type: 'letter',
    content: { ru: 'ы', en: 's' },
    altContent: { ru: 'ы', en: 's' },
    code: 'KeyS',
    width: 'normal',
    row: 4,
  },
  {
    type: 'letter',
    content: { ru: 'в', en: 'd' },
    altContent: { ru: 'в', en: 'd' },
    code: 'KeyD',
    width: 'normal',
    row: 4,
  },
  {
    type: 'letter',
    content: { ru: 'а', en: 'f' },
    altContent: { ru: 'а', en: 'f' },
    code: 'KeyF',
    width: 'normal',
    row: 4,
  },
  {
    type: 'letter',
    content: { ru: 'п', en: 'g' },
    altContent: { ru: 'п', en: 'g' },
    code: 'KeyG',
    width: 'normal',
    row: 4,
  },
  {
    type: 'letter',
    content: { ru: 'р', en: 'h' },
    altContent: { ru: 'р', en: 'h' },
    code: 'KeyH',
    width: 'normal',
    row: 4,
  },
  {
    type: 'letter',
    content: { ru: 'о', en: 'j' },
    altContent: { ru: 'о', en: 'j' },
    code: 'KeyJ',
    width: 'normal',
    row: 4,
  },
  {
    type: 'letter',
    content: { ru: 'л', en: 'k' },
    altContent: { ru: 'л', en: 'k' },
    code: 'KeyK',
    width: 'normal',
    row: 4,
  },
  {
    type: 'letter',
    content: { ru: 'д', en: 'l' },
    altContent: { ru: 'д', en: 'l' },
    code: 'KeyL',
    width: 'normal',
    row: 4,
  },
  {
    type: 'letter',
    content: { ru: 'ж', en: ';' },
    altContent: { ru: 'ж', en: ':' },
    code: 'Semicolon',
    width: 'normal',
    row: 4,
  },
  {
    type: 'letter',
    content: { ru: 'э', en: '\'' },
    altContent: { ru: 'э', en: '"' },
    code: 'Quote',
    width: 'normal',
    row: 4,
  },
  {
    type: 'functional',
    content: { ru: 'Enter', en: 'Enter' },
    altContent: { ru: 'Enter', en: 'Enter' },
    code: 'Enter',
    width: 'wideplus',
    row: 4,
  },
  {
    type: 'functional',
    content: { ru: 'Shift', en: 'Shift' },
    altContent: { ru: 'Shift', en: 'Shift' },
    code: 'ShiftLeft',
    width: 'wideplus',
    row: 5,
  },
  {
    type: 'letter',
    content: { ru: 'я', en: 'z' },
    altContent: { ru: 'я', en: 'z' },
    code: 'KeyZ',
    width: 'normal',
    row: 5,
  },
  {
    type: 'letter',
    content: { ru: 'ч', en: 'x' },
    altContent: { ru: 'ч', en: 'x' },
    code: 'KeyX',
    width: 'normal',
    row: 5,
  },
  {
    type: 'letter',
    content: { ru: 'с', en: 'c' },
    altContent: { ru: 'с', en: 'c' },
    code: 'KeyC',
    width: 'normal',
    row: 5,
  },
  {
    type: 'letter',
    content: { ru: 'м', en: 'v' },
    altContent: { ru: 'м', en: 'v' },
    code: 'KeyV',
    width: 'normal',
    row: 5,
  },
  {
    type: 'letter',
    content: { ru: 'и', en: 'b' },
    altContent: { ru: 'и', en: 'b' },
    code: 'KeyB',
    width: 'normal',
    row: 5,
  },
  {
    type: 'letter',
    content: { ru: 'т', en: 'n' },
    altContent: { ru: 'т', en: 'n' },
    code: 'KeyN',
    width: 'normal',
    row: 5,
  },
  {
    type: 'letter',
    content: { ru: 'ь', en: 'm' },
    altContent: { ru: 'ь', en: 'm' },
    code: 'KeyM',
    width: 'normal',
    row: 5,
  },
  {
    type: 'letter',
    content: { ru: 'б', en: ',' },
    altContent: { ru: 'б', en: '<' },
    code: 'Comma',
    width: 'normal',
    row: 5,
  },
  {
    type: 'letter',
    content: { ru: 'ю', en: '.' },
    altContent: { ru: 'ю', en: '>' },
    code: 'Period',
    width: 'normal',
    row: 5,
  },
  {
    type: 'other',
    content: { ru: '.', en: '/' },
    altContent: { ru: ',', en: '?' },
    code: 'Slash',
    width: 'normal',
    row: 5,
  },
  {
    type: 'functional',
    content: { ru: 'Shift', en: 'Shift' },
    altContent: { ru: 'Shift', en: 'Shift' },
    code: 'ShiftRight',
    width: 'normal',
    row: 5,
  },
  {
    type: 'functional',
    content: { ru: 'Ctrl', en: 'Ctrl' },
    altContent: { ru: 'Ctrl', en: 'Ctrl' },
    code: 'ControlLeft',
    width: 'medium',
    row: 6,
  },

  {
    type: 'functional',
    content: { ru: 'Win', en: 'Win' },
    altContent: { ru: 'Win', en: 'Win' },
    code: 'MetaLeft',
    width: 'normal',
    row: 6,
  },
  {
    type: 'functional',
    content: { ru: 'Alt', en: 'Alt' },
    altContent: { ru: 'Alt', en: 'Alt' },
    code: 'AltLeft',
    width: 'normal',
    row: 6,
  },
  {
    type: 'functional',
    content: { ru: '&nbsp;', en: '&nbsp;' },
    altContent: { ru: '&nbsp;', en: '&nbsp;' },
    code: 'Space',
    width: 'overwide',
    row: 6,
  },
  {
    type: 'functional',
    content: { ru: 'Alt', en: 'Alt' },
    altContent: { ru: 'Alt', en: 'Alt' },
    code: 'AltRight',
    width: 'normal',
    row: 6,
  },
  {
    type: 'functional',
    content: { ru: 'Ctrl', en: 'Ctrl' },
    altContent: { ru: 'Ctrl', en: 'Ctrl' },
    code: 'ControlRight',
    width: 'medium',
    row: 6,
  },
  {
    type: 'functional',
    content: { ru: '◄', en: '◄' },
    altContent: { ru: '◄', en: '◄' },
    code: 'ArrowLeft',
    width: 'normal',
    row: 6,
  },
  {
    type: 'functional',
    content: { ru: '▲', en: '▲' },
    altContent: { ru: '▲', en: '▲' },
    code: 'ArrowUp',
    width: 'normal',
    row: 6,
  },
  {
    type: 'functional',
    content: { ru: '▼', en: '▼' },
    altContent: { ru: '▼', en: '▼' },
    code: 'ArrowDown',
    width: 'normal',
    row: 6,
  },
  {
    type: 'functional',
    content: { ru: '►', en: '►' },
    altContent: { ru: '►', en: '►' },
    code: 'ArrowRight',
    width: 'normal',
    row: 6,
  },
];

/*  const root = document.getElementById('root') 
const textarea = document.querySelector('.textarea')
const row_2 = document.querySelector('.row_2')
const row_3 = document.querySelector('.row_3')
const row_4 = document.querySelector('.row_4') 
 row_2.innerHTML = ''  */



document.body.innerHTML = ''
const root = document.createElement('div');
root.id = 'root'
const cam = document.createElement('div');
cam.classList.add('cam')
const blink = document.createElement('div');
blink.id = 'blink'


const input_area = document.createElement('div');
input_area.classList.add('input_area')
const textarea = document.createElement('textarea');
textarea.classList.add('textarea')
textarea.textContent = 'Hello, World!'
input_area.append(textarea)
const keyBoard = document.createElement('div');
keyBoard.classList.add('keyboard')
const key_wrapper = document.createElement('div');
key_wrapper.classList.add('key_wrapper')
const row_1 = document.createElement('div');
row_1.classList.add('row_1');
const row_2 = document.createElement('div');
row_2.classList.add('row_2');
const row_3 = document.createElement('div');
row_3.classList.add('row_3');
const row_4 = document.createElement('div');
row_4.classList.add('row_4');
const row_5 = document.createElement('div');
row_5.classList.add('row_5');
const row_6 = document.createElement('div');
row_6.classList.add('row_6');
document.body.append(root)
root.append(cam)
root.append(blink)
root.append(input_area)
root.append(keyBoard)
keyBoard.append(key_wrapper)
key_wrapper.append(row_1)
key_wrapper.append(row_2)
key_wrapper.append(row_3)
key_wrapper.append(row_4)
key_wrapper.append(row_5)
key_wrapper.append(row_6)


class KeyboardButtons {
  constructor(num: number, row) {
    const key = document.createElement('div');
    key.classList.add('button');
    if (cap.classList.contains('active')) {
      key.textContent = buttons[num].content.en.toUpperCase()
    } else {
      key.textContent = buttons[num].content.en
    }
    key.onclick = () => {
      if (cap.classList.contains('active')) {
        textarea.focus()
        textarea.value += buttons[num].content.en.toUpperCase()
        console.log(buttons[num].content.en.toUpperCase())
      } else {
        textarea.focus()
        textarea.value += buttons[num].content.en
        console.log(buttons[num].content.en)
      }
    }
    row.append(key)
  }
}


class firstLine {
  constructor(num: number, row) {
    const key = document.createElement('div');
    key.classList.add('button_first');

    key.textContent = buttons[num].content.en
    key.onclick = () => {
      textarea.focus()
      console.log(buttons[num].content.en)
    }
    row.append(key)
  }
}


class KeyDelet {
  constructor(num: number, row) {
    const key = document.createElement('div');
    key.classList.add('delete');
    key.textContent = buttons[num].content.en
    key.onclick = () => {
      textarea.value = textarea.value.slice(0, -1)
      console.log(buttons[num].content.en)
    }
    row.append(key)
  }
}
class KeyTab {
  constructor(num: number, row) {
    const key = document.createElement('div');
    key.classList.add('button');
    key.classList.add('tab');
    key.textContent = buttons[num].content.en
    key.onclick = () => {
      textarea.value += '\t'
    }
    row.prepend(key)
  }
}



class KeyEnter {
  constructor(num: number, row) {
    const key = document.createElement('div');
    key.classList.add('return');
    key.textContent = buttons[num].content.en
    key.onclick = () => {

      console.log(buttons[num].content.en)

    }
    row.append(key)
  }
}

class KeyShift {
  constructor(num: number, row) {
    const key = document.createElement('div');
    key.classList.add('shift');
    key.textContent = buttons[num].content.en
    key.onclick = () => {
      console.log(buttons[num].content.en)
    }
    row.append(key)
  }
}
class KeyCtrl {
  constructor(num: number, row) {
    const key = document.createElement('div');
    key.classList.add('button_buttom');
    key.classList.add('ctrl');
    key.textContent = buttons[num].content.en
    key.onclick = () => {
      console.log(buttons[num].content.en)
    }
    row.append(key)
  }
}
class KeyWin {
  constructor(num: number, row) {
    const key = document.createElement('div');
    key.classList.add('button_buttom');
    key.classList.add('win');
    key.textContent = buttons[num].content.en
    key.onclick = () => {
      console.log(buttons[num].content.en)
    }
    row.append(key)
  }
}

class KeyAlt {
  constructor(num: number, row) {
    const key = document.createElement('div');
    key.classList.add('button_buttom');
    key.classList.add('alt');
    key.textContent = buttons[num].content.en
    key.onclick = () => {
      console.log(buttons[num].content.en)
    }
    row.append(key)
  }
}

class KeySpace {
  constructor(num: number, row) {
    const key = document.createElement('div');
    key.classList.add('button_buttom');
    key.classList.add('space');
    //key.textContent = buttons[num].content.en
    key.onclick = () => {
      textarea.value += ' '
    }
    row.append(key)
  }
}


class KeyarrowLeft {
  constructor(num: number, row) {
    const key = document.createElement('div');  
    key.classList.add('arrow_left');
    key.textContent = buttons[num].content.en
    key.onclick = () => {
      console.log(buttons[num].content.en)
    }
    row.append(key)
  }
}

class KeyarrowRight {
  constructor(num: number, row) {
    const key = document.createElement('div');  
    key.classList.add('arrow_right');
    key.textContent = buttons[num].content.en
    key.onclick = () => {
      console.log(buttons[num].content.en)
    }
    row.append(key)
  }
}

class KeyarrowTop {
  constructor(num: number, row) {
    const key = document.createElement('div');  
    key.classList.add('arrow_top');
    key.textContent = buttons[num].content.en
    key.onclick = () => {
      console.log(buttons[num].content.en)
    }
    row.append(key)
  }
}

class KeyarrowBottom {
  constructor(num: number, row) {
    const key = document.createElement('div');  
    key.classList.add('arrow_bottom');
    key.textContent = buttons[num].content.en
    key.onclick = () => {
      console.log(buttons[num].content.en)
    }
    row.append(key)
  }
}

const arrows_top_bot = document.createElement('div')
arrows_top_bot.classList.add('arrows_top_bot')


const cap = document.createElement('div');
class KeyCapsLock {
  constructor(num: number, row) {
    //const cap = document.createElement('div');
    cap.classList.add('button');
    cap.classList.add('caps_lock');
    cap.textContent = buttons[num].content.en
    const lamp = document.createElement('div');
    lamp.classList.add('lamp');
    cap.prepend(lamp)
    cap.onclick = () => {
      if (cap.classList.contains('active')) {
        cap.classList.remove('active')
      } else {
        cap.classList.add('active')
      }
      console.log(buttons[num].content.en)
    }
    row.prepend(cap)
  }
}

/* 
row_3.innerHTML = ''
row_4.innerHTML = '' */


for (let i = 0; i < 13; i++) {
  let firstLines = new firstLine(i, row_1)
}
for (let i = 13; i < 26; i++) {
  let keys = new KeyboardButtons(i, row_2);
}
const del = new KeyDelet(26, row_2);
const tab = new KeyTab(27, row_3);
for (let i = 28; i < 41; i++) {
  let keys = new KeyboardButtons(i, row_3);
}
const caps = new KeyCapsLock(41, row_4);

for (let i = 42; i < 53; i++) {
  let keys = new KeyboardButtons(i, row_4);
}
const keyEnter = new KeyEnter(53, row_4);
const shiftLeft = new KeyShift(54, row_5)
for (let i = 55; i < 65; i++) {
  let keys = new KeyboardButtons(i, row_5);
}
const shiftRight = new KeyShift(65, row_5);
const keyCtrl = new KeyCtrl(66, row_6);
const keyWin = new KeyWin(67, row_6);
const keyAlt = new KeyAlt(68, row_6);
const keySpace = new KeySpace(69, row_6);
const keyAltR = new KeyAlt(70, row_6);
const keyCtrlR = new KeyCtrl(71, row_6);





const keyarrowLeft = new KeyarrowLeft(72, row_6);
row_6.append(arrows_top_bot)
const keyarrowTop = new KeyarrowTop(73, arrows_top_bot);
const keyarrowBottom = new KeyarrowBottom(74, arrows_top_bot);
const keyarrowRight = new KeyarrowRight(75, row_6);




