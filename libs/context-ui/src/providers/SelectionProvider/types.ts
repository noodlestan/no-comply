import type { ObjectWithId } from '../../types';

export type ObjectFilter = (object: ObjectWithId) => boolean;

export type SelectionAPI = {
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
