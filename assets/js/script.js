// Initial Dados
const c = (el) => document.querySelector(el);
const cs = (el) => document.querySelectorAll(el);

// Functions
function handleMenu() {
    let left = parseInt(c('header .menu .menu--icon').getAttribute('data-show'));

    if(left == 0) {
        c('header .menu .menu--icon').setAttribute('data-show') = 1;
        c('header .menu nav').style.left = '-60vw';
    } else {
        lc('header .menu .menu--icon').setAttribute('data-show') = 0;
        c('header .menu nav').style.left = '0';
    }
}

function changeItem(e) {
    c('a.active').classList.remove('active');
    e.target.classList.add('active');
}

// Events
c('header .menu--icon').addEventListener('click', handleMenu);

cs('header nav ul a').forEach((item) => {
    item.addEventListener('click', changeItem);
});

cs('.banner .pointer').forEach((item) => {
    item.addEventListener('click', () => {
        c('.banner .pointer.active').classList.remove('active');
        item.classList.add('active');

        let key = parseInt(c('.banner .pointer.active').getAttribute('data-slide'));
        if(key == 0) {
            c('.banner-sliders').style.left = '0';
        } else if(key == 1) {
            c('.banner-sliders').style.left = '-100vw';
        } else {
            c('.banner-sliders').style.left = '-200vw';
        }
    })
});