import { CONTEXT_UI_THEME_BASE } from './base';

// @index(['./*.{ts,tsx}', './!(private|parts|functions)*/index.{ts,tsx}'], f => `export * from '${f.path.replace(/\/index$/, '')}';`)
export * from './base';
// @endindex

export const CONTEXT_UI_THEMES = [CONTEXT_UI_THEME_BASE];
