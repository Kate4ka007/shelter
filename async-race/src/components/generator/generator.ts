class Generator {
  constructor() {
    const root = document.createElement('div');
    root.className = 'root';
    const panel = document.createElement('div');
    panel.className = 'panel';
    panel.innerHTML = `<div class='row1'>
                          <input type='text' class='car-name-create'>
                          <input type='color' class='car-color-create'>
                          <button class='btn-car-create btn-select'>CREATE</button></div>
                       <div class='row2'>
                          <input type='text' class='car-name-update'>
                          <input type='color' class='car-color-update'>
                          <button class='btn-car-update btn-select'>UPDATE</button></div>
                       <div class='row3'>
                          <button class='btn-car-race btn-select'>RACE</button>
                          <button class='btn-car-reset btn-select'>RESET</button>
                          <button class='btn-car-ceneratecars btn-select'>GENERATE CARS</button></div>`;

    document.body.appendChild(root);
    root.appendChild(panel);

    const garage = document.createElement('div');
    garage.className = 'page-garage';
    root.appendChild(garage);
  }
}

export default Generator;
