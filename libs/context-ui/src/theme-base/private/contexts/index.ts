import { CONTEXT_UI_MODES } from './mode';
import { CONTEXT_UI_SURFACES } from './surface';
import { CONTEXT_UI_THEMES } from './theme';

// @index(['./*.{ts,tsx}', './!(private|parts|functions)*/index.{ts,tsx}'], f => `export * from '${f.path.replace(/\/index$/, '')}';`)
export * from './mode';
export * from './surface';
export * from './theme';
// @endindex

export const CONTEXT_UI_CONTEXTS = [
    ...CONTEXT_UI_MODES,
    ...CONTEXT_UI_THEMES,
    ...CONTEXT_UI_SURFACES,
];
