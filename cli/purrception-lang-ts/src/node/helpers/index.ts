// @index(['./*.{ts,tsx}', './!(private|parts|functions)*/index.{ts,tsx}'], f => `export * from '${f.path.replace(/\/index$/, '')}';`)
export * from './isBuiltInToken';
export * from './isIntersectionTypeNode';
export * from './isLiteralTypeNode';
export * from './isMappedTypeNode';
export * from './isObjectLiteralTypeNode';
export * from './isTypeExpressionNode';
export * from './isTypeRef';
export * from './isUnionTypeNode';
export * from './normalizeTypeRefObject';
