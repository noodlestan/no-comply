import { Route } from '@solidjs/router';
import { type Component } from 'solid-js';

import {
    AppHomeScreen,
    CalibrationRoutes,
    FeaturesRoutes,
    WelcomePage,
    WelcomeScreen,
} from '../screens';

export const Routes: Component = () => {
    return (
        <>
            <Route path="/" component={WelcomeScreen}>
                <Route path="/" component={WelcomePage} />
            </Route>
            <FeaturesRoutes />
            <Route path="/app" component={AppHomeScreen} />
            <CalibrationRoutes />
        </>
    );
};
