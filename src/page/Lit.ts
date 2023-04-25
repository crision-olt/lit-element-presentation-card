import { html } from 'lit';
import { ProtectedRoute } from '../component/ProtectedRoute';

import '../component/presentationCardLit/PresentationCardLit';
import '../component/ContainerItem';
import { PageKeys } from '../config/pageKeys';
export default class Lit extends ProtectedRoute {
    static get properties() {
        return {
            ...super.properties,
            user: { type: Object },
        };
    };
    constructor() {
        super();
        this.user = {
            name: "Cristian Ionut Olteanu",
            age: 24,
            occupation: "Frontend Dev.",
            hobbies: "Programación, Anime, Videojuegos, Musica...",
            skills: "Me gusta compartir lo que se y encontrar nuevas/mejores formas de hacer las cosas.",
            stack: "React",
            photo: 'https://avatars.githubusercontent.com/u/96696392?s=400&u=554276d270f6e0a3d8f173b5e5986b61d8c1087a&v=4',
        };
    }
    render() {
        return html`
            <div>${this.renderDashboard()}</div>
            <container-item>
                <presentation-card-lit name=${this.user.name} photo=${this.user.photo} skills=${this.user.skills} hobbies=${this.user.hobbies} stack=${this.user.stack} age=${this.user.age} occupation=${this.user.occupation}></presentation-card-lit>
            </container-item>
        ` 
    }
}
customElements.define(PageKeys.LIT, Lit);