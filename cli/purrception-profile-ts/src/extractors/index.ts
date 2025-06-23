// @index(['./*.{ts,tsx}', './!(private|parts|functions)*/index.{ts,tsx}'], f => `export * from '${f.path.replace(/\/index$/, '')}';`)
export * from './extractComponentsFromFile';
export * from './extractFunctionsFromFile';
export * from './extractTypesFromFile';
