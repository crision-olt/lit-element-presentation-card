
import { PageKeys } from "./pageKeys";
import { PathRoutes } from "./pathRoutes";

const lazy = (path: string) => {
    return async () => import(`../page/${path}.ts`);
}

export type PageRoute = {loader:() => Promise<void>, name: string};

export const pageRoutes: Record<PathRoutes, PageRoute> = {
    [PathRoutes.USERS]:   {
        loader: lazy('List'), 
        name: PageKeys.USERS, 
    },
    [PathRoutes.NATIVE]: {
        loader: lazy('Native'), 
        name: PageKeys.NATIVE, 
    },
    [PathRoutes.LIT]:  {
        loader: lazy('Lit'),
        name: PageKeys.LIT, 
    },
    
    [PathRoutes.LOGIN]:  {
        loader: lazy('Login'),
        name: PageKeys.LOGIN, 
    },
    [PathRoutes.USER_DETAIL]:  {
        loader: lazy('UserDetail'),
        name: PageKeys.USER_DETAILS, 
    },
}

export const notFoundRoute = {
    loader: lazy('NotFound'),
    name: PageKeys.NOT_FOUND,
}

