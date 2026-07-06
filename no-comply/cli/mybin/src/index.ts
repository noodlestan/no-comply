// @index(['./*.{ts,tsx}', './!(private|parts|functions)*/index.{ts,tsx}'], f => `export * from '${f.path.replace(/\/index$/, '')}';`)
import { extract } from './extract';

extract().catch(error => {
	console.error('Failed to extract entities from package:', error);
	process.exit(1);
});
