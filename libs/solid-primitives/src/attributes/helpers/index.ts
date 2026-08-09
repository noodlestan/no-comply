// @index(['./*.{ts,tsx}', './!(private|parts|functions)*/index.{ts,tsx}'], f => `export * from '${f.path.replace(/\/index$/, '')}';`)
export * from './resolveAttributeBoolean';
// @endindex

export { resolveAttributeBoolean as attributeBoolean } from './resolveAttributeBoolean';
