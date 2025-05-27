// @index(['./*.{ts,tsx}', './!(private|parts|functions)*/index.{ts,tsx}'], f => `export * from '${f.path.replace(/\/index$/, '')}';`)
export * from './AlignToFirstLineMixin';
export * from './FirstLineAlignMixin';
export * from './TextMixin';
