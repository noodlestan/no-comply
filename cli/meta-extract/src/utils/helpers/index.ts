// @index(['./*.{ts,tsx}', './!(private|parts|functions)*/index.{ts,tsx}'], f => `export * from '${f.path.replace(/\/index$/, '')}';`)
export * from './findComponentFile';
export * from './findFactoryFile';
export * from './findHelperFiles';
export * from './findHookFiles';
export * from './findProviderFile';
export * from './findTypesFile';
