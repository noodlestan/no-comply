/**
 * Hides contained content from sighted users while keeping it accessible to screen readers.
 */

// @index(['./*.{ts,tsx}', './!(private|parts|functions)*/index.{ts,tsx}'], f => `export * from '${f.path.replace(/\/index$/, '')}';`)
export * from './VisuallyHidden';
