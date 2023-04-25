import { html } from 'lit'
import style from './Snackbar.style';
import { EventEmitterElement } from '../EventEmitterElement';
import { EventKeys } from '../../config/eventKeys';
class Snackbar extends EventEmitterElement {
    static get styles () {
        return style;
    }

    timer;
    static get properties () {
        return {
        title: {type:String},
        active: {type: Boolean, reflect: true},
        timing: {type: Number},
        }
    }

    constructor () {
        super();
    }

    connectedCallback () {
        super.connectedCallback()
    }

    disconnectedCallback () {
        clearInterval(this.timer)
        super.disconnectedCallback()
    }

    updated (changed) {
        if (changed.has('active')) {
            if (this.hasAttribute('active')) {
                this.activate()
            }
        }
        super.updated(changed)
    }

    activate () {
        this.style.display = 'block'
        clearInterval(this.timer)
        this.timer = setTimeout(() => {
            this.deactivate();
        }, this.timing)
    }

    deactivate () {
        this._fireEvent(EventKeys.SNACKBAR_DEACTIVATE);
        this.addEventListener('animationend', (event) => {
        if (event.animationName === 'fadeOut') {
            this.style.display = 'none';
        }
        })
    }

    closeSnackbar () {
        this.deactivate()
    }

    render () {
        return html`
            <div id="snackbar">
                <div id="snackbar__container">
                    <p id="snackbar__container__p">
                        ${this.title}
                    </p>
                    <button id="snackbar__container__button" @click=${this.closeSnackbar}>
                        <svg id="snackbar__container__button__svg" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                        <path d="M0 0h24v24H0V0z" fill="none"/>
                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>
                        </svg>
                    </button>
                </div>
            </div>
        `
    }
}

customElements.define('snack-bar', Snackbar)