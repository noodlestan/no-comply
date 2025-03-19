// @index(['./*.{ts,tsx}', './!(private|parts|functions)*/index.{ts,tsx}'], f => `export * from '${f.path.replace(/\/index$/, '')}';`)
export * from './inject';
export * from './mock.test';
export * from './mock';
export * from './resetMocks';
