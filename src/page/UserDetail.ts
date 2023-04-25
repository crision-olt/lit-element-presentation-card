import { html } from 'lit';
import { ProtectedRoute } from '../component/ProtectedRoute';
import { getUser } from '../api/user';
import { PageKeys } from '../config/pageKeys';
import { PathRoutes } from '../config/pathRoutes';
import { EventKeys } from '../config/eventKeys';

import '../component/ContainerItem';
import '../component/presentationCardLit/PresentationCardLit';
import '../component/presentationCardSkeleton/PresentationCardSkeleton';

export default class Detail extends ProtectedRoute {
    
    static get properties() {
        return {
            ...super.properties,
            user: { type: Object },
            routeParams: { type: Object },
        };
    };
    constructor() {
        super();
        this.isSuspended = true;
    }
    connectedCallback(): void {
        super.connectedCallback();
        try {
            if (!this.routeParams?.id) {
                throw new Error('No id provided');
            }
        

            this.asyncCaller(async () => {
                this.user = await getUser(this.routeParams.id);
            });
            
        } catch (error) {
            this._fireEvent(EventKeys.SNACKBAR, { title: error.message })
            window.location.href = PathRoutes.USERS;
        } 
    }

    renderOnSuspense() {
        return html`
            <container-item>
                    <presentation-card-skeleton>
                    </presentation-card-skeleton>
            </container-item>
        `;
    }

    renderOffSuspense() {
        return html`
            <container-item>
                    <presentation-card-lit 
                        name=${this.user.name} 
                        photo=${this.user.photo} 
                        skills=${this.user.skills} 
                        hobbies=${this.user.hobbies} 
                        stack=${this.user.stack} 
                        age=${this.user.age} 
                        occupation=${this.user.occupation}>
                    </presentation-card-lit>
            </container-item>
        `;
    }
}
customElements.define(PageKeys.USER_DETAILS, Detail);