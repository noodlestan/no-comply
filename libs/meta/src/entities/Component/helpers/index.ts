// @index(['./*.{ts,tsx}', './!(private|parts|functions)*/index.{ts,tsx}'], f => `export * from '${f.path.replace(/\/index$/, '')}';`)
export * from './resolveComponentDeclaration';
export * from './resolveComponentProps';
export * from './resolveComponentPropsJsDocData';
export * from './resolveComponentFactoryDeclaration';
