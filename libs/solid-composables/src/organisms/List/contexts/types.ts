import type { BaseContext, SelectionContext } from '@no-comply/solid-contexts';
import type { ObjectWithId } from '@no-comply/solid-primitives';
import type { Accessor } from 'solid-js';

import type { ListComponents } from '../types';

export type ListContextOptions = {
    components: ListComponents;
    items: ObjectWithId[];
    disabled?: boolean;
    selected?: SelectionContext;
};

export type ListContext = BaseContext & {
    type: 'list';
    components: Accessor<ListComponents>;
    items: Accessor<ObjectWithId[]>;
    isDisabled: Accessor<boolean>;
    getSelection: () => ObjectWithId[];
    getFirstSelected: () => ObjectWithId | undefined;
    isItemSelected: (id: string) => boolean;
    select: (object: ObjectWithId) => void;
    toggleSelected: (object: ObjectWithId) => void;
    deselect: (id: string) => void;
    setSelection: (objects: ObjectWithId[]) => void;
    clearSelection: () => void;
    dispose: () => void;
};

export type ListContextValue = [ListContext];
