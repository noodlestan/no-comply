// @index(['./*.{ts,tsx}', './!(private|parts|functions)*/index.{ts,tsx}'], f => `export * from '${f.path.replace(/\/index$/, '')}';`)
export * from './hasInterpolation';
export * from './replaceElements';
export * from './translateJSX';
export * from './translateWithInterpolation';
