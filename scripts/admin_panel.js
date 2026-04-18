const openBtn = document.getElementById('admin_create_button');
const closeBtn = document.getElementById('user_close_button');
const container = document.querySelector('.create-article-container');

function isHidden() {
    return container.hasAttribute('data-hidden');
}

function show() {
    container.removeAttribute('data-hidden');
    container.removeAttribute('hidden');
}

function hide() {
    container.setAttribute('data-hidden', '');
}

function toggle() {
    if (isHidden()) {
        show();
    } else {
        hide();
    }
}

openBtn.addEventListener('click', toggle);
closeBtn.addEventListener('click', hide);

const articlesList = document.getElementById('blog_article_list');
const articleCardTemplate = document.getElementById('article_tmp');
const addarticleButton = document.getElementById('add_article_button');
addarticleButton.addEventListener('click', addarticleCardFromTemplate);

function addarticleCardFromTemplate() {
    const examplearticleData = {
        title: 'Minim anim pariatur magna duis sit et dolor inci',
        description: 'Sint occaecat deserunt aliquip do occaecat ut quis. Cupidatat magna fugiat quis sit duis est in volup',
        tm: 'Mar 24, 2026'
    };

    const clonedTemplateNode = articleCardTemplate.content.cloneNode(true);

    clonedTemplateNode.querySelector('.blog-article-title').textContent = examplearticleData.title;
    clonedTemplateNode.querySelector('.blog-article-description').textContent = examplearticleData.description;
    clonedTemplateNode.querySelector('.blog-time').textContent = examplearticleData.tm;

    articlesList.appendChild(clonedTemplateNode);
}

const statsBtn = document.getElementById('admin_stats_button');
const statsDialog = document.getElementById('statsDialog');
const articlesCountEl = document.getElementById('articlesCount');

statsBtn.addEventListener('click', () => {
    const articles = document.querySelectorAll('.blog-article');
    articlesCountEl.textContent = articles.length;
    statsDialog.showModal();
});

const statsCloseBtn = statsDialog.querySelector('[data-close]');
statsCloseBtn.addEventListener('click', () => {
    statsDialog.close();
});

statsDialog.addEventListener('click', (e) => {
    const rect = statsDialog.getBoundingClientRect();
    const isOutside =
        e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom;

    if (isOutside) {
        statsDialog.close();
    }
});