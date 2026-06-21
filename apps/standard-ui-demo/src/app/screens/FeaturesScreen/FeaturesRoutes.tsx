import { Route } from '@solidjs/router';
import type { Component } from 'solid-js';

import {
	ComponentPage,
	ComponentPlaygroundPage,
	ComponentsIndexPage,
	ComponentsScreen,
} from '../ComponentsScreen';

export const FeaturesRoutes: Component = () => (
	<Route path="/features/components" component={ComponentsScreen}>
		<Route path="/" component={ComponentsIndexPage} />
		<Route path="/:component" component={ComponentPage} />
		<Route path="/:component/playground" component={ComponentPlaygroundPage} />
	</Route>
);
