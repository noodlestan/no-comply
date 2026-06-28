// @index(['./*.{ts,tsx}', './!(private|parts|functions)*/index.{ts,tsx}'], f => `export * from '${f.path.replace(/\/index$/, '')}';`)
export * from './_ResourcesIndexPage';
export * from './color';
export * from './composition';
export * from './forms';
export * from './space';
export * from './typography';
