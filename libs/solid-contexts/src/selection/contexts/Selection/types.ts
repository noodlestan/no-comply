import type { ObjectWithId } from '@no-comply/solid-primitives';

import type { BaseContext } from '../../../context';

export type ObjectFilter = (object: ObjectWithId) => boolean;

export type SelectionContext = BaseContext & {
    type: 'selection';
    count: (filter?: ObjectFilter) => number;
    objects: <T extends ObjectWithId = ObjectWithId>(filter?: ObjectFilter) => T[];
    select: (object: ObjectWithId) => void;
    deselect: (id: string) => void;
    toggleSelected: (object: ObjectWithId) => void;
    getById: <T extends ObjectWithId = ObjectWithId>(id: string) => T | undefined;
    hasId: (id: string) => boolean;
    hasObject: (object: ObjectWithId) => boolean;
    setSelection: (objects: ObjectWithId[]) => void;
    clearSelection: () => void;
    dispose: () => void;
};

export type SelectionContextValue = [SelectionContext];
