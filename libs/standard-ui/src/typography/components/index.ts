// @index(['./*.{ts,tsx}', './!(private|parts|functions)*/index.{ts,tsx}'], f => `export * from '${f.path.replace(/\/index$/, '')}';`)
export * from './ActionLabel';
export * from './ActionLabelAligned';
export * from './Display';
export * from './DisplayAligned';
export * from './FirstLineAlign';
export * from './Label';
export * from './LabelAligned';
export * from './Text';
export * from './TextAligned';
