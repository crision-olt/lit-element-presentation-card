import { html } from "lit";
import { RouteWithDashboard } from "./RouteWithDashboard";

export class SuspendedRoute extends RouteWithDashboard {
    static get properties() {
        return {
            isSuspensed: {type: Boolean},
        };
    }
    constructor() {
        super();
        this.isSuspensed = true;
    }

    async asyncCaller(call: ()=> Promise<any>) {
        this.isSuspensed = true;
        await call();
        this.isSuspensed = false;
    }

    renderOnSuspense() {
        return html`
            <h1>To be defined onSuspense!</h1>
        `;
    }

    renderOffSuspense() {
        return html`
            <h1>To be defined offSuspense!</h1>
        `;
    }

    render() {
        return html`
            <div>${this.renderDashboard()}</div>
            <div>${this.isSuspensed ? this.renderOnSuspense() : this.renderOffSuspense()}</div>
        `;
    }
}