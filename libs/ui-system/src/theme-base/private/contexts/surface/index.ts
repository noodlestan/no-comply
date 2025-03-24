import { CONTEXT_UI_SURFACE_BANNER } from './banner';
import { CONTEXT_UI_SURFACE_CARD } from './card';
import { CONTEXT_UI_SURFACE_DIALOG } from './dialog';
import { CONTEXT_UI_SURFACE_INVERSE } from './inverse';
import { CONTEXT_UI_SURFACE_PAGE } from './page';
import { CONTEXT_UI_SURFACE_STAGE } from './stage';

// @index(['./*.{ts,tsx}', './!(private|parts|functions)*/index.{ts,tsx}'], f => `export * from '${f.path.replace(/\/index$/, '')}';`)
export * from './banner';
export * from './card';
export * from './dialog';
export * from './inverse';
export * from './page';
export * from './stage';
// @endindex

export const CONTEXT_UI_SURFACES = [
    CONTEXT_UI_SURFACE_STAGE,
    CONTEXT_UI_SURFACE_INVERSE,
    CONTEXT_UI_SURFACE_PAGE,
    CONTEXT_UI_SURFACE_DIALOG,
    CONTEXT_UI_SURFACE_CARD,
    CONTEXT_UI_SURFACE_BANNER,
];
