import { STANDARD_UI_MODES } from './mode';
import { STANDARD_UI_SURFACES } from './surface';
import { STANDARD_UI_THEMES } from './theme';

// @index(['./*.{ts,tsx}', './!(private|parts|functions)*/index.{ts,tsx}'], f => `export * from '${f.path.replace(/\/index$/, '')}';`)
export * from './mode';
export * from './surface';
export * from './theme';
// @endindex

export const STANDARD_UI_CONTEXTS = [
    ...STANDARD_UI_MODES,
    ...STANDARD_UI_THEMES,
    ...STANDARD_UI_SURFACES,
];
