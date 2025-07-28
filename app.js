const modal = document.querySelector('#modal');
const content = document.querySelector('#content');
const backdrop = document.querySelector('#backdrop');

content.addEventListener('click', () => {
    modal.classList.add('open');
});

backdrop.addEventListener('click', () => {
    modal.classList.remove('open');
});