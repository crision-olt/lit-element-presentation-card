import { css, html} from 'lit';
import { EventKeys } from '../config/eventKeys';

import { EventEmitterElement } from '../component/EventEmitterElement';

import '../component/Input';
import '../component/Button';
import { PageKeys } from '../config/pageKeys';

class Login extends EventEmitterElement {
    static get styles() {
        return css`
            .login {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                display: flex;
                justify-content: center;
                color: white;
                align-items: center;
                width: 300px;
                height: 400px;
                background: #fff;
                border-radius: 5px;
                box-shadow: 0 0 10px rgba(0,0,0,0.1);
                overflow: hidden;
                background-color: #083344;
            }

            .login__form {
                width: 200px;
                height: 300px;
            }
        `;
    }



    updateLogin(event) {
        if(!event.detail?.key) return;
        this.loginData[event.detail.key] = event.detail.value;
        this._validateForm();
    }

    static get properties() {
        return {
            loginData: { type: Object },
            disabled: { type: Boolean },
        };
    }
    constructor() {
        super();
        this.loginData = { 
            username: '', 
            password: ''
        };
        this.disabled = true;
    }
    
    render() {
        return html`
        <section class="login">
            <form class="login__form">
            
                <h1>Login</h1>
                <div>
                    <my-input name="username" type="text" @input=${this.updateLogin}>Username</my-input>
                </div>

                <div>
                    <my-input name="password" type="text" @input=${this.updateLogin}>Password</my-input>
                </div>

                <my-button type="submit" ?isDisabled=${this.disabled} @click=${this.login}>Login</my-button>
            </form>
        </section>
        `;
    }

    login(e) {
        e.preventDefault();
        const { username, password } = this.loginData;
        this._fireEvent(EventKeys.LOGIN, {username, password})
    }
    _validateForm() {
        const {username, password } = this.loginData;
        this.disabled = username.length === 0 || password.length === 0
    }
}

customElements.define(PageKeys.LOGIN, Login);