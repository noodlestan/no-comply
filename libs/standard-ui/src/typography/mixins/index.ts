// @index(['./*.{ts,tsx}', './!(private|parts|functions)*/index.{ts,tsx}'], f => `export * from '${f.path.replace(/\/index$/, '')}';`)
export * from './ActionLabel';
export * from './Mono';
export * from './ComposableType';
export * from './Display';
export * from './InputTypography';
export * from './Label';
export * from './Text';
