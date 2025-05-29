import { Route } from '@solidjs/router';
import type { Component } from 'solid-js';

import { CalibrationScreen } from './CalibrationScreen';
import {
    CalibrationPage,
    ColorPalettesPage,
    LargeCompositionsPage,
    MediumCompositionsPage,
    SmallCompositionsPage,
    SpaceScalePage,
    TypographyVariantsPage,
} from './pages';

export const CalibrationRoutes: Component = () => (
    <Route path="/calibration" component={CalibrationScreen}>
        <Route path="/" component={CalibrationPage} />
        <Route path="/space/scales" component={SpaceScalePage} />
        <Route path="/color/palettes" component={ColorPalettesPage} />
        <Route path="/typography/variants" component={TypographyVariantsPage} />
        <Route path="/composition/large" component={LargeCompositionsPage} />
        <Route path="/composition/medium" component={MediumCompositionsPage} />
        <Route path="/composition/small" component={SmallCompositionsPage} />
    </Route>
);
