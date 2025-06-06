// @index(['./*.{ts,tsx}', './!(private|parts|functions)*/index.{ts,tsx}'], f => `export * from '${f.path.replace(/\/index$/, '')}';`)
export * from './RenderDocsItem';
export * from './RenderDocsSection';
export * from './RenderDocsSections';
