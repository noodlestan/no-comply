import { CONTEXT_UI_MODE_DARK } from './dark';
import { CONTEXT_UI_MODE_LIGHT } from './light';

// @index(['./*.{ts,tsx}', './!(private|parts|functions)*/index.{ts,tsx}'], f => `export * from '${f.path.replace(/\/index$/, '')}';`)
export * from './dark';
export * from './light';
// @endindex

export const CONTEXT_UI_MODES = [CONTEXT_UI_MODE_DARK, CONTEXT_UI_MODE_LIGHT];
