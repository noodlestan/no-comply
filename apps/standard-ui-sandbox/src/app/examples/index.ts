// @index(['./*.{ts,tsx}', './!(private|parts|functions)*/index.{ts,tsx}'], f => `export * from '${f.path.replace(/\/index$/, '')}';`)
export * from './ExampleLarge';
export * from './ExampleMedium';
export * from './ExampleNano';
export * from './ExampleSmall';
export * from './ExampleTiny';
