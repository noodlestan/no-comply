// @index(['./*.{ts,tsx}', './!(private|parts|functions)*/index.{ts,tsx}'], f => `export * from '${f.path.replace(/\/index$/, '')}';`)
export * from './ActionLabel';
export * from './Code';
export * from './Display';
export * from './Label';
export * from './Text';
