import {LitElement, html} from 'lit';
import { EventKeys } from '../../config/eventKeys';

import './Snackbar';


class SnackbarContext extends LitElement {
    static get properties() {
        return {
            title: {type: String},
            active: {type: Boolean},
            timing: {type: Number},
            timer: {type: Object},
        };
    };
    constructor() {
        super();
        this.title = '';
        this.addEventListener(EventKeys.SNACKBAR, this.setActive);
        this.addEventListener(EventKeys.SNACKBAR_DEACTIVATE, this.deactivate);
    }

    setActive(event) {
        if(!event.detail) {
            throw new Error('Snackbar event detail is not defined!');
            return;
        }
        this.title = event.detail.title;
        this.timing = event.detail.timing ?? 3000;
        this.active = true;
    }
    deactivate() {
        this.active = false;
    }

    render() {
        return html`
            <slot></slot>
            <snack-bar .title=${this.title} ?active=${this.active} .timing=${this.timing}>
            </snack-bar>
        `;
            
    }
    
}

customElements.define('snackbar-context', SnackbarContext);