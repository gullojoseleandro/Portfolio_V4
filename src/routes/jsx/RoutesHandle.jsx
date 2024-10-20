import { useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate 
} from "react-router-dom";

import routes from "./../js/routes";

const RoutesHandle = () => {
    const [mainPage] = useState(routes.mainPage);

    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={<Navigate replace to={mainPage} />}
                />
                {routes.mainRoutes.map((mainRoute) => (
                    <Route
                        key={mainRoute.path}
                        path={mainRoute.path}
                        element={mainRoute.component}
                    />
                ))}
            </Routes>
        </Router>
    );
};

export default RoutesHandle;
