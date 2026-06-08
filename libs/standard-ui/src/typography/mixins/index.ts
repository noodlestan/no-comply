// @index(['./*.{ts,tsx}', './!(private|parts|functions)*/index.{ts,tsx}'], f => `export * from '${f.path.replace(/\/index$/, '')}';`)
export * from './ActionLabel';
export * from './ComposableType';
export * from './Display';
export * from './AlignFirstLine';
export * from './Label';
export * from './Text';
