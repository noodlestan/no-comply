import type { NoComplyEntityData } from '../entities/index.js';

import { buildSearchEntityRecord } from './private/index.js';
import type { SearchEntityRecord } from './types.js';

export function buildSearchEntityRecords(entities: NoComplyEntityData[]): SearchEntityRecord[] {
	return entities.map(buildSearchEntityRecord);
}
