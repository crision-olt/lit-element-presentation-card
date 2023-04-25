import { LitElement, html, css } from 'lit';
import { EventKeys } from '../config/eventKeys';

export class Loader extends LitElement {
    static get styles() {
        return css`
            .loader__container {
                z-index:2000;
                position: absolute;
                top: 0;
                left: 0;
                background: rgba(6,6,6,0.5);
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .loader__container__loader {
                margin: 100px auto;
                width: 120px;
                color:black;
                height: 120px;
                border: 16px solid #f3f3f3;
                border-top: 16px solid #3498db;
                border-radius: 50%;
                animation: spin 2s linear infinite, heart-beat 2s linear infinite;
                background-color: blue;
                text-align: center;
                line-height: 120px;
            }

            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }

            @keyframes heart-beat {
                55% { background-color: #fff; }
                60% { background-color: #3498db; }
                65% { background-color: #fff; }
                70% { background-color: #3498db; }
                100% { background-color: #fff; }
            }

        `;
    }
    static get properties() {
        return {
            loader: {type: Boolean},
        };
    }

    constructor() {
        super();
        this.loader = false;
        this.addEventListener(EventKeys.LOADER, this.setLoader);
    }

    setLoader(event) {
        if(!event.detail) {
            setTimeout(() => {
                this.loader = false;
            }, 200);
            return;
        }
        this.loader = event.detail;
    }

    render() {
        return html`
            ${this.loader ? html`<div class="loader__container"><div class="loader__container__loader"></div></div>` : html``}
            <slot></slot>
        ` 
    }
}

customElements.define('my-loader', Loader);