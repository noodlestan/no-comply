// @index(['./*.{ts,tsx}', './!(private|parts|functions)*/index.{ts,tsx}'], f => `export * from '${f.path.replace(/\/index$/, '')}';`)
export * from './ShortcutsProvider';
export * from './useShortcuts';
export * from './useShortcutsKeyDownListener';
