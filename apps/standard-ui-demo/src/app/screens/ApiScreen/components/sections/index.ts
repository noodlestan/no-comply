// @index(['./*.{ts,tsx}', './!(private|parts|functions)*/index.{ts,tsx}'], f => `export * from '${f.path.replace(/\/index$/, '')}';`)
export * from './APIComponentSection';
export * from './APIDependenciesSection';
export * from './APIFactorySection';
export * from './APITypesSection';
