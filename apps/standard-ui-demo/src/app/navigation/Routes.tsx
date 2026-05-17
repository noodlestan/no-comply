import { Route } from '@solidjs/router';
import { type Component } from 'solid-js';

import {
	ApiRoutes,
	AppHomeScreen,
	FeaturesRoutes,
	ResourcesRoutes,
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
			<ResourcesRoutes />
			<ApiRoutes />
		</>
	);
};
