// @index(['./*.{ts,tsx}', './!(private|parts|functions)*/index.{ts,tsx}'], f => `export * from '${f.path.replace(/\/index$/, '')}';`)
export * from './extractParamTags';
export * from './extractReturnsTag';
export * from './extractTags';
export * from './extractTemplateTags';
