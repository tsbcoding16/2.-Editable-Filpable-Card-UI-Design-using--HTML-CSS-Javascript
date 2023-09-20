var content = document.querySelector('.content');
var backBtn = document.querySelector('.backBtn');
var frontBtn = document.querySelector('.frontBtn');

const back = () => {
  content.style.transform = 'rotateY(180deg)';
}

const front = () => {
  content.style.transform = 'rotateY(0)';
}

backBtn.addEventListener('click', back);
frontBtn.addEventListener('click', front);