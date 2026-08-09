// @index(['./*.{ts,tsx}', './!(private|parts|functions)*/index.{ts,tsx}'], f => `export * from '${f.path.replace(/\/index$/, '')}';`)
export * from './ApiEntityPage';
export * from './ApiIndexPage';
export * from './ApiModulePage';
export * from './ApiPackagePage';
