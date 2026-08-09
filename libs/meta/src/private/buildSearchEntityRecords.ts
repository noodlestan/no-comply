import type { NoComplyEntityData } from '../entities';

import { buildSearchEntityRecord } from './private';
import type { SearchEntityRecord } from './types';

export function buildSearchEntityRecords(entities: NoComplyEntityData[]): SearchEntityRecord[] {
	return entities.map(buildSearchEntityRecord);
}
