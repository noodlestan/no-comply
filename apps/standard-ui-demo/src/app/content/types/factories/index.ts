// @index(['./*.{ts,tsx}', './!(private|parts|functions)*/index.{ts,tsx}'], f => `export * from '${f.path.replace(/\/index$/, '')}';`)
export * from './createComponentDocsPage';
export * from './createDocsItemData';
export * from './createDocsPageData';
export * from './createDocsResponsiveItemData';
export * from './createDocsSectionData';
