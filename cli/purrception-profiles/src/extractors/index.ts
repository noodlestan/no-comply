// @index(['./*.{ts,tsx}', './!(private|parts|functions)*/index.{ts,tsx}'], f => `export * from '${f.path.replace(/\/index$/, '')}';`)
export * from './createControllerExtractor';
export * from './createHelperExtractor';
export * from './createMixinExtractor';
