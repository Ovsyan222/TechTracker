const modal = document.querySelector('#modal');
const content = document.querySelector('#content');
const backdrop = document.querySelector('#backdrop');
const progress = document.querySelector('#progress');

content.addEventListener('click', () => {
    modal.classList.add('open');
});

backdrop.addEventListener('click', () => {
    modal.classList.remove('open');
});

function init() {
    renderCards();
    renderProgress();
}

function renderCards() {
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

function renderProgress() {
    const percent = computeProgressPercent();

    let background;

    if (percent <= 30) {
        background = '#E75A5A';
    } else if (percent > 30 && percent < 70) {
        background = '#F99415';
    } else {
        background = '#73BA3C';
    }
    
    progress.style.background = background;
    progress.style.width = percent + '%';
    progress.textContent = percent ? percent + '%' : '';
}

function computeProgressPercent() {

    if (technologies.length === 0) {
        return 0;
    }

    let doneCount = 0;
    for (let i = 0; i < technologies.length; i++) {
        if (technologies[i].done) doneCount++;
    }

    return Math.round((100 * doneCount) / technologies.length);
}

const technologies = [
    {title: 'HTML', description: 'HTML text', type: 'html', done: true},
    {title: 'CSS', description: 'CSS text', type: 'css', done: false},
    {title: 'JavaScript', description: 'javaScript text', type: 'js', done: false},
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
