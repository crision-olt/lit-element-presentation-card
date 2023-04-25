import { EventKeys } from '../config/eventKeys';
import { EventEmitterElement } from './EventEmitterElement';

export class PathListener extends EventEmitterElement {
    static get properties() {
        return {
            pathname: {type: String},
        };
    }

    constructor() {
        super();
        this.onLocationChange();
        this.addEventListener(EventKeys.GO_TO, this.goTo);
        this.addEventListener(EventKeys.POP_STATE, this.onLocationChange);

    }
    
    onLocationChange() {
        this.goTo({detail:{path:window.location.pathname, notPushState:true}});
    }

    goTo(e) {
        this.pathname = e.detail.path;
    }
}