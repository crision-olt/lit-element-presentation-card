import { LocalStorageKeys } from '../config/localStorageKeys';
import { SuspendedRoute } from './RouteWithSuspense';
import { EventKeys } from '../config/eventKeys';
import { PathRoutes } from '../config/pathRoutes';

export class ProtectedRoute extends SuspendedRoute {
    constructor() {
        super();
        const userStored = localStorage.getItem(LocalStorageKeys.USER) ?? undefined;
        const user = userStored ? JSON.parse(userStored): undefined;
        if(!user){
            window.dispatchEvent(new CustomEvent(`${EventKeys.GO_TO}-window`, {detail:{path: PathRoutes.LOGIN}}));
        } 
    }
}