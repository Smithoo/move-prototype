export default class Events {
    constructor() {
        this.refs = {};
        this.selected = '';
    }

    setRefs(refs) {
        this.refs = refs;
    }

    setSelected(target) {
        this.selected = target;
        this.deselectAll();
        this.refs[target].select();
    }

    deselectAll() {
        for(let refName in this.refs) {
            const ref = this.refs[refName];
            ref.deselect();
        }
    }

    addArrowEvent() {
        document.addEventListener('keydown', (event) => {
            if (event.keyCode === 37) {
                event.preventDefault();
                console.log('left');
                const fn = this.refs[this.selected].moveLeft;
                if (fn) {
                    this.refs[this.selected].moveLeft();
                }
            } else if (event.keyCode === 38) {
                event.preventDefault();
                console.log('up');
                const fn = this.refs[this.selected].moveUp;
                if (fn) {
                    this.refs[this.selected].moveUp();
                }
            } else if (event.keyCode === 39) {
                event.preventDefault();
                console.log('right');
                const fn = this.refs[this.selected].moveRight;
                if (fn) {
                    this.refs[this.selected].moveRight();
                }
            } else if (event.keyCode === 40) {
                event.preventDefault();
                console.log('down');
                const fn = this.refs[this.selected].moveDown;
                if (fn) {
                    this.refs[this.selected].moveDown();
                }
            }
        });
    }

    moveUp(target) {
        console.log('event up', target);
        this.setSelected(target);
    }

    moveDown(target) {
        console.log('event down', target);
        this.setSelected(target);
    }

    moveLeft(target) {
        console.log('event left', target);
        this.setSelected(target);
    }

    moveRight(target) {
        console.log('event right', target);
        this.setSelected(target);
    }
}