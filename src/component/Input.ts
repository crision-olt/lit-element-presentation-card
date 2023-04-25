//write input component ussing lit.

import { html, css } from 'lit';
import { EventEmitterElement } from './EventEmitterElement';

export class Input extends EventEmitterElement {
    static get properties() {
        return {
            type: { type: String },
            name: { type: String },
        };
    }
    
    static get styles() {
        return css`
            .input-container {
                position:relative;  
            }

            .input-container + .input-container {
                margin-top: 30px;
            }

            .input-container__input {
                position: relative;
                padding: 12px 0 5px 12px;
                width: 100%;
                outline: 0;
                border: 0;
                border: 1px solid #555;
                border-radius: 15px;
                transition: box-shadow 150ms ease-out;
            }

            .input-container__input:focus {
                box-shadow: 0 2px 0 0 blue;
            }


            .input-container__input[value]:not([value=""])  {
                box-shadow: 0 2px 0 0 lightgreen;
            }

            .input-container__placeholder {
                font-family: sans-serif;
                left: 20px;
                line-height: 14px;
                pointer-events: none;
                transform-origin: 0 50%;
                transition: transform 200ms, color 200ms;
                top: 20px;
            }


        `;
    }

    constructor() {
        super();
        this.type = 'text';
    }

    firstUpdated() {
        this.shadowRoot?.querySelector('input')?.addEventListener('input', this._updateValue.bind(this))
    }

    _updateValue(e) {
        this._fireEvent('input', {value: e.target.value, key: this.name});
    }
    
    render() {
        return html`
        <div class="input-container">
            <label for=${this.name} class="input-container__placeholder"><slot></slot></label>
            <input
                class="input-container__input"
                id=${this.name}
                name=${this.name}
                type=${this.type}
                placeholder=" "
            />
        </div>
        `;
    }
}
customElements.define('my-input', Input);