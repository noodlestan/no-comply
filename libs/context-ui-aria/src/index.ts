// @index(['./*.{ts,tsx}', './!(private|parts|functions)*/index.{ts,tsx}'], f => `export * from '${f.path.replace(/\/index$/, '')}';`)
export * from './controllers/label';
export * from './controllers';
export * from './role';
export * from './tag';
export * from './types';
