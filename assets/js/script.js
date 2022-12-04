// Initial Dados
const c = (el) => document.querySelector(el);
const cs = (el) => document.querySelectorAll(el);
let menuCount = 0;

// Functions
function showButton() {
    if(window.scrollY === 0) {
        c('.scrollButton').style.display = 'none';
    } else {
        c('.scrollButton').style.display = 'block';
    }
}
function toTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}
function bodyHandleMenu() {
    if(menuCount === 1) {
        menuCount = 0;
        c('header .menu nav').style.left = '-60vw';
        document.documentElement.style.overflow = 'auto';
    }
}

function handleMenu() {
    if(menuCount === 0) {
        menuCount = 1;
        c('header .menu nav').style.left = '0';
        document.documentElement.style.overflow = 'hidden';
    } else {
        menuCount = 0;
        c('header .menu nav').style.left = '-60vw';
        document.documentElement.style.overflow = 'auto';
    }
}

function changeItem(e) {
    c('a.active').classList.remove('active');
    e.target.classList.add('active');
}

// Events
window.addEventListener('scroll', showButton);

c('.scrollButton').addEventListener('click', toTop);

c('main').addEventListener('click', bodyHandleMenu);

c('header .menu--icon').addEventListener('click', handleMenu);

cs('header nav ul a').forEach((item) => {
    item.addEventListener('click', changeItem);
});
// slide of banner
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
    });
});

cs('.section-team .pointer').forEach((item) => {
    item.addEventListener('click', () => {
        c('.section-team .pointer.active').classList.remove('active');

        item.classList.add('active');
    });
});

cs('.section-clients .pointer').forEach((item) => {
    item.addEventListener('click', () => {
        c('.section-clients .pointer.active').classList.remove('active');
        item.classList.add('active');

        let key = c('.section-clients .pointer.active').getAttribute('data-clients');
        if(key == 0) {
            c('.section-clients .sliders').style.marginLeft = '0';
        } else if(key == 1) {
            c('.section-clients .sliders').style.marginLeft = '-100vw';
        } else {
            c('.section-clients .sliders').style.marginLimage.pngimage.pngeft = '-200vw';
        }
    });
})