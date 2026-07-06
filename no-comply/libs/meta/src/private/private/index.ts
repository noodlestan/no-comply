// @index(['./*.{ts,tsx}', './!(private|parts|functions)*/index.{ts,tsx}'], f => `export * from '${f.path.replace(/\/index$/, '')}';`)
export * from './buildSearchEntityRecord';
export * from './calcSearchEntityResultScore';
export * from './calcSearchSymbolResultScore';
export * from './searchSymbolRecord';
