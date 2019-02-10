class Tracker {
    constructor(id) {
        this.id = id;
    }

    init() {
        this.errorPath = [];
        this.subscribe();
    }

    subscribe() {
        document.addEventListener('mousedown', evt => {
            this.handleMouseDown(evt);
        }, false);

        window.addEventListener('error', evt => {
            this.handleError(evt);
        }, false);
    }

    handleMouseDown(evt) {
        const target = evt.target;
        const targetNode = evt.target.nodeName;
        const excludedNodes = ['HTML', 'BODY'];

        if (!excludedNodes.includes(targetNode.toUpperCase())) {
            const targetSelector = this.getSelector(target);
            const targetParentSelector = this.getSelector(target.parentNode);


            const stepInfo = {
                targetNode,
                selector: `${targetParentSelector} ${targetSelector}`,
                location: window.location.pathname,
                time: Date.now()
            };


            this.errorPath.push(stepInfo);
        }
    }

    handleError(evt) {
        localStorage.setItem(`${evt.message}_${this.id}`, JSON.stringify(this.errorPath));

        this.errorPath = [];
    }

    getSelector(target) {
        const classSelector = target.className.split(' ').join('.');
        const idSelector = target.id ? `#${target.id}` : '';

        return `${idSelector}${classSelector}`;
    }
}

const init = id => {
    const tracker = new Tracker(id);
    tracker.init();
};


export default init;

export { Tracker};
