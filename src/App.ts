import {LitElement, html} from 'lit';

import './component/Auth';
import './component/Loader';
import './component/Router';
import './component/snackbar/SnackbarContext';


class App extends LitElement {
    render() {
        return html`
            <snackbar-context>
                <my-loader>
                    <my-auth>
                        <my-router></my-router>
                    </my-auth>
                </my-loader>
            </snackbar-context>
        `;
    }
}

customElements.define('lit-app', App);