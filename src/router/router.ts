import Catalogue from "../components/pages/Catalogue/Catalogue";

export interface IRoute {
    path: string;
    component: React.ComponentType;
    isExact?: boolean;
}

export enum RouteNames {
    LOGIN = '/login',
    CATALOGUE = '/'
}

export const publicRoutes: IRoute[] = [{
    path: RouteNames.LOGIN, isExact: true, component: Catalogue
}]

export const privateRoutes: IRoute[] = [{
    path: RouteNames.CATALOGUE, isExact: true, component: Catalogue
}]