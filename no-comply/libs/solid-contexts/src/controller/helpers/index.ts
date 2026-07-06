// @index(['./*.{ts,tsx}', './!(private|parts|functions)*/index.{ts,tsx}'], f => `export * from '${f.path.replace(/\/index$/, '')}';`)
export * from './createUIController';
export * from './createUIControllerChildAPI';
export * from './createUIControllerContainer';
export * from './createUIControllerParentAPI';
export * from './createUIControllerRoot';
