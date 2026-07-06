import { Route } from '@solidjs/router';
import type { Component } from 'solid-js';

import { ApiScreen } from './ApiScreen';
import { ApiEntityPage, ApiIndexPage, ApiModulePage, ApiPackagePage } from './pages';

export const ApiRoutes: Component = () => (
	<Route path="/api" component={ApiScreen}>
		<Route path="/" component={ApiIndexPage} />
		<Route path="/:ns/:pkg" component={ApiPackagePage} />
		<Route path="/:ns/:pkg/:mod" component={ApiModulePage} />
		<Route path="/:ns/:pkg/:mod/:type/:ent" component={ApiEntityPage} />
	</Route>
);
