// @index(['./*.{ts,tsx}', './!(private|parts|functions)*/index.{ts,tsx}'], f => `export * from '${f.path.replace(/\/index$/, '')}';`)
export * from './createDataAttributes';
export * from './resolveDataBoolean';
export * from './resolveDataName';
// @endindex

export { resolveDataBoolean as dataBoolean } from './resolveDataBoolean';
export { resolveDataName as dataName } from './resolveDataName';
