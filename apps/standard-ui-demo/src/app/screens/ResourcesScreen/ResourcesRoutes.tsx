import { Route } from '@solidjs/router';
import type { Component } from 'solid-js';

import { ResourcesScreen } from './ResourcesScreen';
import {
	ColorPalettesPage,
	FormInputsPage,
	LargeCompositionsPage,
	MediumCompositionsPage,
	ResourcesIndexPage,
	SmallCompositionsPage,
	SpaceScalePage,
	TypographyVariantsPage,
} from './pages';

export const ResourcesRoutes: Component = () => (
	<Route path="/resources" component={ResourcesScreen}>
		<Route path="/" component={ResourcesIndexPage} />
		<Route path="/space/scales" component={SpaceScalePage} />
		<Route path="/color/palettes" component={ColorPalettesPage} />
		<Route path="/forms/inputs" component={FormInputsPage} />
		<Route path="/typography/variants" component={TypographyVariantsPage} />
		<Route path="/composition/large" component={LargeCompositionsPage} />
		<Route path="/composition/medium" component={MediumCompositionsPage} />
		<Route path="/composition/small" component={SmallCompositionsPage} />
	</Route>
);
