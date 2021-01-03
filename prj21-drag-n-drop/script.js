// alert('Hello from script.js');

const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

for(const empty of empties) {
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('drop', dragDrop);
}

function dragStart() {
  // console.log('drag Start');

  // add hold class to draggable item
  this.className += ' hold';

  // set the container div to invisible
  setTimeout(() => this.className = 'invisible', 0);
}

function dragEnd() {
  // console.log('drag End');


  this.className = 'fill';
}

function dragOver(e) {
  // console.log('drag Over');
  
  // stop default dragover behavior
  e.preventDefault();
  
}

function dragEnter(e) {
  // console.log('drag Enter');

  // stop default dragenter behavior
  e.preventDefault();

  this.className += ' hovered';
}

function dragLeave() {
  // console.log('drag Leave');
  
  this.className = 'empty';
}

function dragDrop() {
  // console.log('drag Drop');

  this.className = 'empty';

  this.append(fill)
}
