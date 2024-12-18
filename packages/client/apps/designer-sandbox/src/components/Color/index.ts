// @index(['./*.astro','./!(private|parts|functions)*/index.{ts}'], f => `export * from '${f.path.replace(/\/index$/, '')}';`)
export * from './Color';
