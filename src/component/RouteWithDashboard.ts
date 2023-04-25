import { html } from "lit";


import './Dashboard';
import { EventEmitterElement } from "./EventEmitterElement";
export class RouteWithDashboard extends EventEmitterElement {
    constructor() {
        super();
    }
    
    renderDashboard() {
        return html`
            <my-dashboard></my-dashboard>
        `;
    }
}