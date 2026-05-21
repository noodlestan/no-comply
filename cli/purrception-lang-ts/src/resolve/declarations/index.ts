// @index(['./*.{ts,tsx}', './!(private|parts|functions)*/index.{ts,tsx}'], f => `export * from '${f.path.replace(/\/index$/, '')}';`)
export * from './resolveAliasDeclaration';
export * from './resolveInterfaceDeclaration';
export * from './resolveTypeExpressionDeclaration';
