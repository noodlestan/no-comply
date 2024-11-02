import { SystemSurface, SystemTheme } from '../root';

import { base } from './tokens/base';
import { invert } from './tokens/invert';

export const theme: SystemTheme = {
    name: 'base',
    extend: [],
    mode: 'dark',
    tokens: {
        base,
        alt: invert,
    },
};

const stage: SystemSurface = {
    name: 'stage',
    extend: [],
};

const inverse: SystemSurface = {
    name: 'inverse',
    extend: ['stage'],
};

const page: SystemSurface = {
    name: 'page',
    extend: ['stage'],
};

const dialog: SystemSurface = {
    name: 'dialog',
    extend: ['stage'],
};

const card: SystemSurface = {
    name: 'card',
    extend: ['stage'],
};

const banner: SystemSurface = {
    name: 'banner',
    extend: ['stage'],
};

export const surfaces = [stage, inverse, page, dialog, card, banner];
