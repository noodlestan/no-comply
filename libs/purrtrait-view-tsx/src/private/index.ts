// @index(['./*.{ts,tsx}', './!(private|parts|functions)*/index.{ts,tsx}'], f => `export * from '${f.path.replace(/\/index$/, '')}';`)
export * from './createTSXViewTargetPlaceholder';
export * from './extractComponentName';
export * from './findTargetNode';
export * from './isTargetAttr';
export * from './replaceTarget';
export * from './wrapFragment';
