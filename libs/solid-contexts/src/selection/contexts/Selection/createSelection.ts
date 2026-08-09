import type { ObjectWithId } from '@no-comply/solid-primitives';
import { ReactiveMap } from '@solid-primitives/map';
import { ReactiveSet } from '@solid-primitives/set';
import { batch } from 'solid-js';

import type { ObjectFilter, SelectionContext, SelectionContextValue } from './types';

export const createSelection = (
	initialObjects?: Map<string, ObjectWithId>,
): SelectionContextValue => {
	const initialObjectsSet = initialObjects ? Object.keys(initialObjects) : [];
	const selectedIds = new ReactiveSet<string>(initialObjectsSet);
	const selectedObjects = new ReactiveMap<string, ObjectWithId>(initialObjects);

	const objects = <T extends ObjectWithId>(filter?: ObjectFilter): T[] => {
		const all = Array.from(selectedObjects.values());
		return (filter ? all.filter(filter) : all) as T[];
	};

	const count = (filter?: ObjectFilter): number => {
		if (!filter) {
			return selectedIds.size;
		}
		return objects(filter).length;
	};

	const select = (object: ObjectWithId): void => {
		batch(() => {
			selectedIds.add(object.id);
			selectedObjects.set(object.id, object);
		});
	};

	const deselect = (id: string): void => {
		batch(() => {
			selectedIds.delete(id);
			selectedObjects.delete(id);
		});
	};

	const toggleSelected = (object: ObjectWithId) => {
		if (selectedIds.has(object.id)) {
			deselect(object.id);
		} else {
			select(object);
		}
	};

	const getById = <T extends ObjectWithId = ObjectWithId>(id: string): T | undefined => {
		const object = selectedObjects.get(id);
		if (object) {
			return selectedObjects.get(id) as T;
		}
	};

	const hasId = (id: string): boolean => {
		return selectedIds.has(id);
	};

	const hasObject = (object: object): boolean => {
		for (const value of selectedObjects.values()) {
			if (value === object) {
				return true;
			}
		}
		return false;
	};

	const setSelection = (objects: ObjectWithId[]): void => {
		const ids = Array.from(selectedIds.values());
		const capsuleIds = objects.map(c => c.id);
		const idsToRemove = ids.filter(id => !capsuleIds.includes(id));
		const idsToAdd = capsuleIds.filter(id => !ids.includes(id));
		const equals = idsToAdd.length + idsToRemove.length === 0;
		if (equals) {
			return;
		}
		batch(() => {
			objects.forEach(object => {
				selectedIds.add(object.id);
				selectedObjects.set(object.id, object);
			});
			idsToRemove.forEach(id => {
				selectedIds.delete(id);
				selectedObjects.delete(id);
			});
		});
	};

	const clearSelection = (): void => {
		batch(() => {
			selectedIds.clear();
			selectedObjects.clear();
		});
	};

	const dispose = () => {
		clearSelection();
	};

	const context: SelectionContext = {
		type: 'selection',
		count,
		objects,
		select,
		deselect,
		toggleSelected,
		getById,
		hasId,
		hasObject,
		setSelection,
		clearSelection,
		dispose,
	};

	return [context];
};
