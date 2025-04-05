import { STANDARD_UI_MODE_DARK } from './dark';
import { STANDARD_UI_MODE_LIGHT } from './light';

// @index(['./*.{ts,tsx}', './!(private|parts|functions)*/index.{ts,tsx}'], f => `export * from '${f.path.replace(/\/index$/, '')}';`)
export * from './dark';
export * from './light';
// @endindex

export const STANDARD_UI_MODES = [STANDARD_UI_MODE_DARK, STANDARD_UI_MODE_LIGHT];
