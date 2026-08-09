// @index(['./*.{ts,tsx}', './!(private|parts|functions)*/index.{ts,tsx}'], f => `export * from '${f.path.replace(/\/index$/, '')}';`)
export * from './resolveLabelValue';
// @endindex

export { resolveLabelValue as labelValue } from './resolveLabelValue';
