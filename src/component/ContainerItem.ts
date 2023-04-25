import {LitElement, html, css} from 'lit';

class ContainerList extends LitElement {
    static get styles() {
        return css`
            .container {
                margin-top: 20px;
                margin-left:50px;
                display: inline-grid;
                justify-content: center;
            }
        `
    };

    render() {
        return html`
            <div class="container">
                <slot></slot>
            </div>
        `;
    }
}

customElements.define('container-item', ContainerList);