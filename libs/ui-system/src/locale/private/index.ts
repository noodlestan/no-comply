// @index(['./*.{ts,tsx}', './!(private|parts|functions)*/index.{ts,tsx}'], f => `export * from '${f.path.replace(/\/index$/, '')}';`)
export * from './has-interpolation';
export * from './replace-elements';
export * from './translate-jsx';
export * from './translate-with-interpolation';
