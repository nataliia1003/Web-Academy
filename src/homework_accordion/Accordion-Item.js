export class AccordionItem {
    constructor(rootElement, body, clickCallback) {
        this.rootElement = rootElement;
        this.body = body;
        this.expandClickCallback = clickCallback;
    }

    render() {
        this.accordionItemElement = document.createElement('div');
        const accordionTitleElement = document.createElement('button');
        const accordionBodyElement = document.createElement('div');

        this.accordionItemElement.classList.add('accordion');
        accordionTitleElement.classList.add('accordion__title');
        accordionBodyElement.classList.add('accordion__body');

        accordionTitleElement.innerHTML = this.body.title;
        accordionBodyElement.innerHTML = this.body.content;

        accordionTitleElement.addEventListener('click', () => {
            if (this.accordionItemElement.classList.contains('active')) {
                this.collapse();
            } else {
                this.expandClickCallback();
            }
        });

        this.accordionItemElement.appendChild(accordionTitleElement);
        this.accordionItemElement.appendChild(accordionBodyElement);
        this.rootElement.appendChild(this.accordionItemElement);
    }

    collapse() {
        this.accordionItemElement.classList.remove('active');
    }

    expand() {
        this.accordionItemElement.classList.add('active');
    }
}
