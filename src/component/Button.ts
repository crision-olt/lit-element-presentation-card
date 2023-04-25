import { LitElement, html, css } from 'lit';

export class Button extends LitElement {

    static get properties() {
        return {
            isDisabled: { type: Boolean },
            type: { type: String },
        };
    }

    constructor() {
        super()
        this.isDisabled = false
    }

    static get styles() {
        return css`
            :host {
                --btn-bk-color: #4CAF50;
                --btn-bk-color-hover: #45a049;
                --btn-bk-color-active: #3e8e41;
                --btn-txt-color: white;
            }    
            button {
                background-color: var(--btn-bk-color,#4CAF50);
                border: none;
                color: var(--btn-txt-color,white);
                padding: 15px 32px;
                text-align: center;
                text-decoration: none;
                display: inline-block;
                font-size: 16px;
                margin: 4px 2px;
                cursor: pointer;
                border-radius: 12px;
                transition-duration: 0.4s;
                transition-property: background-color;
                transition-timing-function: ease-in-out;

            }
            
            button:hover {
                background-color: var(--btn-bk-color-hover,#45a049);
            }

            button:active {
                background-color: var(--btn-bk-color-active,#3e8e41);
                box-shadow: 0 5px #666;
                transform: translateY(4px);
            }
        `
    }

    render() {
        return html`
            <button type=${this.type} ?disabled=${this.isDisabled}>
                <slot></slot>
            </button>
        `;
    }
}
customElements.define('my-button', Button);