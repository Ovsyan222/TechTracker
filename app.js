const modal = document.querySelector('#modal');
const content = document.querySelector('#content');
const backdrop = document.querySelector('#backdrop');

content.addEventListener('click', () => {
    modal.classList.add('open');
});

backdrop.addEventListener('click', () => {
    modal.classList.remove('open');
});

function init() {
    if (technologies.length === 0) {
        content.innerHTML = '<p class="empty">Технологий нет</p>';
    } else {
        let html = '';
        for (let i = 0; i < technologies.length; i++) {
            const tech = technologies[i]
            html += toCard(tech);
        }
        content.innerHTML = html;
    }
}

const technologies = [
    {title: 'HTML', description: 'HTML text', type: 'html', done: true},
    {title: 'CSS', description: 'CSS text', type: 'css', done: true},
    {title: 'JavaScript', description: 'javaScript text', type: 'js', done: true},
    {title: 'Git', description: 'Git text', type: 'git', done: false},
    {title: 'React', description: 'React text', type: 'react', done: false}
]

function toCard(tech) {
    const doneClass = tech.done ? 'done' : '';
    return `
            <div class="card ${doneClass}">
                <h3>${tech.title}</h3>
            </div>
        `
}

init();
