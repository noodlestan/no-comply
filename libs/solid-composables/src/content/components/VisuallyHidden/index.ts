/**
 * Hides content from sighted users while keeping it accessible to screen readers.
 *
 * @since 0.0.11
 */

// @index(['./*.{ts,tsx}', './!(private|parts|functions)*/index.{ts,tsx}'], f => `export * from '${f.path.replace(/\/index$/, '')}';`)
export * from './types';
export * from './VisuallyHidden';
