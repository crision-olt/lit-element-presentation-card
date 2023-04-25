
import { EventKeys } from '../config/eventKeys';
import { notFoundRoute, pageRoutes } from '../config/pageRoutes';
import { asyncEvery } from '../utils/asyncEvery';
import { PathListener } from './PathListener';
import { unsafeStatic, html } from 'lit/static-html.js';
import { match } from 'path-to-regexp';

export class Router extends PathListener {

    static get properties() {
        return {
            ...super.properties,
            component: {type: Object},
            charging: {type: Boolean},
            routeParams: {type: Object},
        };
    }

    constructor() {
        super();
        this.onLocationChange();
        this.importOutlet(this.pathname);
        this.addEventListener(EventKeys.GO_TO, this.goTo);
        this.addEventListener(EventKeys.POP_STATE, this.onLocationChange);
    }

    async goTo(e) {
        super.goTo(e);

        if(!e.detail.notPushState) window.history.pushState(null, '', e.detail.path);
        await this.importOutlet(e.detail.path);
        const event = new Event(EventKeys.PUSH_STATE);
        window.dispatchEvent(event);
    }

    async importOutlet(path: string) {
        this.charging = await asyncEvery(Object.entries(pageRoutes), async ([key, route]) => {
            const matcherUrl = match(key)(path);
            if(!matcherUrl) return true;
            this.routeParams = matcherUrl.params;
            await route.loader();
            this.component = route.name;
            return false;
        });

        if(!this.charging) return;

        await notFoundRoute.loader();
        this.component = notFoundRoute.name;

        this.charging = false;
    }

    render() {
        return this.charging ? html`` : html`<${unsafeStatic(this.component)} .routeParams=${this.routeParams}></${unsafeStatic(this.component)}>`;
    }
}


customElements.define('my-router', Router);