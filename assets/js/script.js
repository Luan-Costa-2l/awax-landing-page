// Initial Dados
const c = (el) => document.querySelector(el);
const cs = (el) => document.querySelectorAll(el);

// Functions
function changeItem(e) {
    c('a.active').classList.remove('active');
    e.target.classList.add('active');
}

// Events
cs('header nav ul a').forEach((item) => {
    item.addEventListener('click', changeItem);
});

cs('.banner .pointer').forEach((item) => {
    item.addEventListener('click', (e) => {
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