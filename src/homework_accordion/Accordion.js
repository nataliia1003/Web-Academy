import { AccordionItem } from './Accordion-Item';

export class Accordion {
    constructor(rootElement, body) {
        this.rootElement = rootElement;
        this.body = body;
        this.accordionItemsArray = [];
    }

    render() {
        for (let i = 0; i < this.body.length; i++) {
            this.accordionItemsArray[i] = new AccordionItem(
                this.rootElement,
                this.body[i],
                () => {
                    this.expandItem(i);
                }
            );
            this.accordionItemsArray[i].render();
        }
    }

    expandItem(i) {
        this.collapseAll();
        this.accordionItemsArray[i].expand();
    }

    collapseAll() {
        for (let i = 0; i < this.accordionItemsArray.length; i++) {
            this.accordionItemsArray[i].collapse();
        }
    }
}
