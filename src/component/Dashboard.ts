import { html, css } from 'lit';
import { PathRoutes } from '../config/pathRoutes';
import { PathListener } from './PathListener';

import './Link';
import './Button';
import { EventKeys } from '../config/eventKeys';

export class Dashboard extends PathListener {
    static get styles(){
        return css`
            .dashboard {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                margin-top:10px;
            }
            my-button {
                --btn-bk-color: #d81508;
            }
        `
    }

    constructor() {
        super();
    }

    logout() {
        this._fireEvent(EventKeys.LOGOUT);
    }

    render() {
        return  html`
            <section class="dashboard">
                <nav>
                    <my-link path=${PathRoutes.USERS} pathname=${this.pathname}>List</my-link>
                    <my-link path=${PathRoutes.NATIVE} pathname=${this.pathname}>Native</my-link>
                    <my-link path=${PathRoutes.LIT} pathname=${this.pathname}>Lit</my-link>
                    <my-button @click=${this.logout}>Logout</my-button>
                </nav>  
            </section>
        ` 
    }
}

customElements.define('my-dashboard', Dashboard);