import { STANDARD_UI_THEME_STANDARD } from './standard';

// @index(['./*.{ts,tsx}', './!(private|parts|functions)*/index.{ts,tsx}'], f => `export * from '${f.path.replace(/\/index$/, '')}';`)
export * from './standard';
// @endindex

export const STANDARD_UI_THEMES = [STANDARD_UI_THEME_STANDARD];
