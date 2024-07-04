import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

import routes from "./../js/routes";

const RoutesHandle = () => {
    return (
        <Router basename={routes.basename}>
            <Routes>
                <Route path="/" element={<Navigate replace to={routes.mainPage} />} />
                {routes.mainRoutes.map((mainRoute) => (
                    <Route
                        key={mainRoute.path}
                        path={mainRoute.path}
                        element={mainRoute.component}
                    />
                ))}
                ;
            </Routes>
        </Router>
    );
};

export default RoutesHandle;
