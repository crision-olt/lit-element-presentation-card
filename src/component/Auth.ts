import { html } from 'lit';
import { login } from '../api/login';
import { EventKeys } from '../config/eventKeys';

import './Dashboard';
import '../page/Login';
import { PathRoutes } from '../config/pathRoutes';
import { LocalStorageKeys } from '../config/localStorageKeys';
import { PathListener } from './PathListener';
export class Auth extends PathListener {
    static get properties() {
        return {
            ...super.properties,
            user: {type: Object},
        };
    }

    constructor() {
        super();
        const userStored = localStorage.getItem(LocalStorageKeys.USER) ?? undefined;
        this.user = userStored ? JSON.parse(userStored): undefined;
        this.addEventListener(EventKeys.LOGOUT, this.logout);
        this.addEventListener(EventKeys.LOGIN, this.login);
    }

    async login(event) {
        this._fireEvent(EventKeys.LOADER, true)
        const {username, password} = event.detail;
        try {
            if(username !== '1234' || password !== '1234'){
                throw new Error('Usuario o contraseña incorrectos');
            }
            const result = await login(username, password)
            localStorage.setItem(LocalStorageKeys.USER, JSON.stringify(result));
            this.user = result;
            window.dispatchEvent(new CustomEvent(`${EventKeys.GO_TO}-window`, {detail:{path: PathRoutes.USERS}}));
            
        } catch (error) {
            this._fireEvent(EventKeys.SNACKBAR, {title: error.message})
        } finally {
            this._fireEvent(EventKeys.LOADER, false)
        }
    }

    logout() {
        localStorage.removeItem(LocalStorageKeys.USER);
        window.dispatchEvent(new CustomEvent(`${EventKeys.GO_TO}-window`, {detail:{path: PathRoutes.LOGIN}}));
        this.user = undefined;
    }

    render() {
        return  html`
            <slot></slot>
        `;
            
    }
}

customElements.define('my-auth', Auth);