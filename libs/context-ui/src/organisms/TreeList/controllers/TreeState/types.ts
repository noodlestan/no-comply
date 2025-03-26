import type { ObjectWithId } from '../../../../types';

export type TreeState = {
    isExpanded: (id: string) => boolean;
    expand: (id: string | string[]) => void;
    toggleExpanded: (id: string) => void;
    collapse: (id: string | string[]) => void;
    getSelection: () => ObjectWithId[];
    getFirstSelected: () => ObjectWithId | undefined;
    isSelected: (id: string) => boolean;
    select: (object: ObjectWithId) => void;
    toggleSelected: (object: ObjectWithId) => void;
    deselect: (id: string) => void;
    setSelection: (objects: ObjectWithId[]) => void;
    clearSelection: () => void;
    dispose: () => void;
};
