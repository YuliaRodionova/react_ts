import { Routes, Route } from 'react-router-dom';
import { privateRoutes, publicRoutes } from './router/router'

const AppRouter = () => {
    const auth = true
    return (
        auth === true ?
            <Routes>
                {privateRoutes.map(route =>
                    <Route path={route.path}
                        //exact={route.isExact}
                        Component={route.component}
                    />
                )}
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route path={route.path}
                        //exact={route.isExact}
                        Component={route.component}
                    />
                )}
            </Routes>

    )

}