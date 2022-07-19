import { PageNotFound } from '../components/PageNotFound/PageNotFound';
import { EventDashboard } from '../pages/EventsDashboard/EventDashboard';

export interface RouteConfig {
    path: string;
    component: JSX.Element
    routes: RouteConfig[]
}

export const routes = [
    {
        path: "/",
        component: EventDashboard,
        routes: []
    },
    {
        path: "/events",
        component: EventDashboard,
        routes: []
    },
    {
        path: "*",
        component: PageNotFound,
        routes: []
    }
];



