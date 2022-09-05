// Tabs

const tabBtnInner = Array.from(document.querySelectorAll('#service__tab'));
const serviceCards = Array.from(document.querySelectorAll('#service__cards'));

tabBtnInner[0].classList.add('service__tab--active');
serviceCards[0].classList.add('service__cards--active');

let activeBtn = tabBtnInner[0];
let activeSlide = serviceCards[0];

tabBtnInner.forEach((el) => {
    el.addEventListener('click', onTabBtnClick);
});

function onTabBtnClick(e) {
    const btn = e.target.closest('#service__tab');
    changeBtn(btn);
};

function changeBtn(btn) {
    if (btn.classList.contains('.service__tab--active')) {
        return;
    };
    activeBtn.classList.remove('service__tab--active');
    btn.classList.add('service__tab--active');
    activeBtn = btn;
    changeContent(tabBtnInner.indexOf(btn));
};

function changeContent(index) {
    activeSlide.classList.remove('service__cards--active');
    serviceCards[index].classList.add('service__cards--active');
    activeSlide = serviceCards[index];
};