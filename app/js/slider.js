class SliderBtn {

    constructor(obj = {}) {
        this.slideClass = obj.slideClass;

        this.slidesToView = obj.slidesToView;

        obj?.btnClass ? this.btnClass = obj.btnClass : this.btnClass = '';
        if (obj?.btnClassInner) {
            this.btnClassInner = obj.btnClassInner;
            this.btnInner = document.querySelector(`.${obj.btnClassInner}`);
        };

        this.slideArray = document.querySelectorAll(`.${this.slideClass}`);

        this.slidesCount = this.slideArray.length;

        this.slidesToView == null ? this.slidesToView = 1 : 0;
        this.counter = this.slidesToView;
        this.counter--;

        this.firstClassChange();
    };

    createBtn() {

        const btnLeft = document.createElement('button');
        const btnRight = document.createElement('button');

        btnLeft.classList.add(`${this.btnClass}--left`);
        btnRight.classList.add(`${this.btnClass}--right`);

        this.btnInner.append(btnLeft);
        this.btnInner.append(btnRight);

        this.btnL = document.querySelector(`.${this.btnClass}--left`);
        this.btnR = document.querySelector(`.${this.btnClass}--right`);

        this.btnArray = [];
        this.btnArray[0] = this.btnL;
        this.btnArray[1] = this.btnR;

        this.checkClickBtn();

    };

    firstClassChange() {

        for (let i = 0; i < this.slidesToView; i++) {
            this.slideArray[i].classList.add(`${this.slideClass}--active`);
        };

        this.createBtn();

    };

    checkClickBtn() {

        this.btnArray[0].addEventListener('click', () => {
            if ((this.counter - this.slidesToView) >= 0) {
                this.counter--;
                this.classChange();
            };
        });

        this.btnArray[1].addEventListener('click', () => {
            if (this.counter < this.slidesCount - 1) {
                this.counter++;
                this.classChange();
            };
        });

    };

    classChange() {

        for (const slide of this.slideArray) {
            slide.classList.remove(`${this.slideClass}--active`);
        };

        for (let i = 0; i < this.slidesToView; i++) {
            this.slideArray[this.counter - i].classList.add(`${this.slideClass}--active`);
        };

    };
};


// slidesToView: default = 1;