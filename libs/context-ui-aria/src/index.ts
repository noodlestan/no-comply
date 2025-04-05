// @index(['./*.{ts,tsx}', './!(private|parts|functions)*/index.{ts,tsx}'], f => `export * from '${f.path.replace(/\/index$/, '')}';`)
export * from './label';
export * from './mixins';
export * from './role';
export * from './tag';
export * from './types';
