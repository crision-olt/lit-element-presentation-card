import { html } from 'lit';
import { LocalStorageKeys } from '../config/localStorageKeys';
import { RouteWithDashboard } from '../component/RouteWithDashboard';
import { PageKeys } from '../config/pageKeys';

class NotFound extends RouteWithDashboard {

    static get properties() {
        return {
            user: { type: Object },
        };
    }

    constructor() {
        super();
        const userStored = localStorage.getItem(LocalStorageKeys.USER) ?? undefined;
        this.user = userStored ? JSON.parse(userStored): undefined;
    }
    
    render() {
        return html`
            ${this.user ? html`${this.renderDashboard()}` : html``}
            <div>Ruta inexistente! 404</div>
        ` 
    }
}

customElements.define(PageKeys.NOT_FOUND, NotFound);