import { html, css } from 'lit';
import { EventKeys } from '../config/eventKeys';
import { EventEmitterElement } from './EventEmitterElement';

export class Link extends EventEmitterElement {
    static get styles() {
        return css`
            :host {
                --border-size: 1px;
            }
            a {
                text-decoration: none;
                color: black;
                border: var(--border-size) solid black;
                padding: 5px;
                margin-left: 5px;
                margin-right: 5px;
            }
            a.selected {
                color: red;
            }
        `
    }
    static get properties() {
        return {
            path: {type: String},
            pathname: {type: String},
        }
    }

    to(e) {
        e.preventDefault();
        this._fireEvent(EventKeys.GO_TO, {path:this.path})
    }

    constructor() {
        super();
        this.pathname = window.location.pathname;
    }

    render() {
        return  html`
            <a href=${this.path} class=${this.path === this.pathname ? 'selected' : ''} @click=${this.to}>
                <slot></slot>
            </a>
        ` 
    }
}

customElements.define('my-link', Link);