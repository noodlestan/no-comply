// @index(['./*.{ts,tsx}', './!(private|parts|functions)*/index.{ts,tsx}'], f => `export * from '${f.path.replace(/\/index$/, '')}';`)
export * from './isNoComplyComponent';
export * from './resolveComponentDeclaration';
export * from './resolveComponentFactoryDeclaration';
export * from './resolveComponentProps';
export * from './resolveComponentPropsJsDocData';
