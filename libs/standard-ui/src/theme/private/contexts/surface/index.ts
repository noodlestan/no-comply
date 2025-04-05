import { STANDARD_UI_SURFACE_BANNER } from './banner';
import { STANDARD_UI_SURFACE_CARD } from './card';
import { STANDARD_UI_SURFACE_DIALOG } from './dialog';
import { STANDARD_UI_SURFACE_INVERSE } from './inverse';
import { STANDARD_UI_SURFACE_PAGE } from './page';
import { STANDARD_UI_SURFACE_STAGE } from './stage';

// @index(['./*.{ts,tsx}', './!(private|parts|functions)*/index.{ts,tsx}'], f => `export * from '${f.path.replace(/\/index$/, '')}';`)
export * from './banner';
export * from './card';
export * from './dialog';
export * from './inverse';
export * from './page';
export * from './stage';
// @endindex

export const STANDARD_UI_SURFACES = [
    STANDARD_UI_SURFACE_STAGE,
    STANDARD_UI_SURFACE_INVERSE,
    STANDARD_UI_SURFACE_PAGE,
    STANDARD_UI_SURFACE_DIALOG,
    STANDARD_UI_SURFACE_CARD,
    STANDARD_UI_SURFACE_BANNER,
];
