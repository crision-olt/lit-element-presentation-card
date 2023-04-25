import { css, html } from 'lit';
import { ProtectedRoute } from '../component/ProtectedRoute';
import { User } from '../types/user';
import { getUsers } from '../api/user';
import { PageKeys } from '../config/pageKeys';

import '../component/ContainerList';
import '../component/presentationCardLit/PresentationCardLit';
import '../component/presentationCardSkeleton/PresentationCardSkeleton';
import { PathRoutes } from '../config/pathRoutes';

export default class List extends ProtectedRoute {
    static get styles() {
        return css`
                my-link {
                    --border-size: 0;
                }
            `
    }
    static get properties() {
        return {
            ...super.properties,
            user: { type: Object },

        };
    };
    constructor() {
        super();
        this.isSuspended = true;
        this.users = [];

        this.asyncCaller(async () => {
            this.users = await getUsers();
        });
        
    }

    renderOnSuspense() {
        const skeletonList = [1,2,3,4,5,6,7,8,9,10];
        return html`
            <container-list>
                ${skeletonList.map(() => html`
                    <presentation-card-skeleton>
                    </presentation-card-skeleton>
                `)}
            </container-list>
        `;
    }

    renderOffSuspense() {
        return html`
            <container-list>
                ${this.users.map((user: User) => html`
                    <my-link  path=${PathRoutes.USER_DETAIL.replace(':id', `${user.id}`)}>
                        <presentation-card-lit 
                            name=${user.name} 
                            photo=${user.photo} 
                            skills=${user.skills} 
                            hobbies=${user.hobbies} 
                            stack=${user.stack} 
                            age=${user.age} 
                            occupation=${user.occupation}>
                        </presentation-card-lit>
                    </my-link>
                `)}
            </container-list>
        `;
    }
}
customElements.define(PageKeys.USERS, List);