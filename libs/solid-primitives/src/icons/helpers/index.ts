// @index(['./*.{ts,tsx}', './!(private|parts|functions)*/index.{ts,tsx}'], f => `export * from '${f.path.replace(/\/index$/, '')}';`)
export * from './createIconValue';
export * from './resolveIconValue';

// @endindex

export { resolveIconValue as iconValue } from './resolveIconValue';
