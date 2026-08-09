// @index(['./*.{ts,tsx}', './!(private|parts|chunk|functions)*/index.{ts,tsx}'], f => `export * from '${f.path.replace(/\/index$/, '')}';`)
export * from './createTSXCompilerModule';
export * from './types';
