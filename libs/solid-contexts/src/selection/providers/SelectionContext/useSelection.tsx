import type { ObjectWithId } from '@no-comply/solid-primitives';
import { useContext } from 'solid-js';

import type { ObjectFilter, SelectionContext } from '../../contexts';

import { SelectionContextCTX } from './private';

export const useSelection = (filter?: ObjectFilter): SelectionContext => {
	const [context] = useContext(SelectionContextCTX) || [];
	if (!context) {
		throw new Error('useSelection() must be wrapped in <SelectionProvider/>');
	}

	if (!filter) {
		return context;
	}

	const count = (overrideFilter?: ObjectFilter): number => {
		return context.count(overrideFilter ?? filter);
	};

	const objects = <O extends ObjectWithId>(overrideFilter?: ObjectFilter): O[] => {
		return context.objects((overrideFilter ?? filter) as ObjectFilter);
	};

	return {
		...context,
		count,
		objects,
	} as SelectionContext;
};
