import { Component } from 'solid-js';

import { surfacesStore, themesStore } from '../../root';
import { surfaces, theme } from '../constants';

import '../styles/reset.css';

import '../styles/base/color.css';
import '../styles/base/opacity.css';
import '../styles/base/outline.css';
import '../styles/base/radius.css';
import '../styles/base/space.css';
import '../styles/base/type.css';
import '../styles/base/surfaces.css';
import '../styles/base/cards.css';
import '../styles/base/pills.css';
import '../styles/base/layout.css';
import '../styles/base/scrollbars.css';

import '../styles/invert/color.css';
import '../styles/invert/surfaces.css';

import '../styles/patterns/actions.css';
import '../styles/patterns/dividers.css';
import '../styles/patterns/data.css';
import '../styles/patterns/forms.css';
import '../styles/patterns/transitions.css';

export const ThemeGreen: Component = () => {
    const { registerTheme } = themesStore;
    const { registerSurface } = surfacesStore;

    registerTheme(theme);
    surfaces.forEach(registerSurface);
    return <></>;
};
