import type { EntityExtractResult } from '@purrception/primitives';

import type { ModuleExtractContext } from './types';

export function splitContextsToUpdate(
	entities: EntityExtractResult[],
	changedPaths: string[],
): [paths: string[], others: EntityExtractResult[]] {
	const toProcess = new Set<string>();
	const remaining: EntityExtractResult[] = [];

	for (const result of entities) {
		const moduleContext = result.context.context as ModuleExtractContext;
		const isAffected = changedPaths.some(p => p.startsWith(moduleContext.moduleMeta.path));
		console.info(isAffected);
		if (isAffected) {
			const modulePath = moduleContext.moduleMeta.path;
			toProcess.add(modulePath);
		} else {
			remaining.push(result);
		}
	}

	const paths = [...toProcess];
	const others = remaining;
	return [paths, others];
}
