import { LitElement } from "lit";

export class EventEmitterElement extends LitElement {
    constructor() {
        super();
    }
    
    _fireEvent(eventName: string, detail: unknown = {}) {
        this.dispatchEvent(new CustomEvent(eventName, { bubbles: true, composed: true, detail: detail}))
    }
}
