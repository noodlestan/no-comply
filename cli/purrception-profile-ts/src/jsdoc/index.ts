// @index(['./*.{ts,tsx}', './!(private|parts|functions)*/index.{ts,tsx}'], f => `export * from '${f.path.replace(/\/index$/, '')}';`)
export * from './extractDeclarationJsDoc';
export * from './extractFunctionJsDoc';
export * from './hasJsDocIgnore';
export * from './types';
