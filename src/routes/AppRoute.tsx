import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorBoundary from "../utilities/Errorboundary/ErrorBoundary";
import { RouteConfig, routes } from "./ComponentMapping";

export interface ApprouteProps {
    route?: RouteConfig
}


export const AppRoute = (props: ApprouteProps) => {
    const routeComponents = routes.map((route) => {
        return <Route path={route.path} element={<ErrorBoundary><route.component /></ErrorBoundary>} ></Route>
    })

    return <>
        <BrowserRouter>
            <Routes>
                {routeComponents}
            </Routes>
        </BrowserRouter>
    </>
}