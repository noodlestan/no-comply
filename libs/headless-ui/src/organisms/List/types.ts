import type { ObjectWithId } from '@noodlestan/context-ui-types';
import { type Component } from 'solid-js';

export type ListState = {
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

export type ListItemComponentProps = {
    state: ListState;
    listItem: ObjectWithId;
    isSelected: boolean;
    onClick: (ev: Event) => void;
    onShiftClick: (ev: Event) => void;
    onAltClick: (ev: Event) => void;
};

export type ListItemComponentSolid = Component<ListItemComponentProps>;

export type ListItemComponentFn = (
    props: ListItemComponentProps,
    component?: ListItemComponent,
) => ListItemComponentSolid;

export type ListItemComponent = ListItemComponentFn | ListItemComponentSolid;

export type ListKeyboardControllerAPI = {
    handlers: {
        onKeyDown: (ev: KeyboardEvent) => void;
    };
};
