import type { SelectionContext } from '@noodlestan/context-ui';
import type { ObjectWithId } from '@noodlestan/context-ui-primitives';

import type { ListState } from '../types';

export const createListState = (selection: SelectionContext): ListState => {
    let firstSelected: string | undefined;

    const getFirstSelected = (): ObjectWithId | undefined => {
        if (firstSelected) {
            return selection.getById(firstSelected);
        }
    };

    const select = (object: ObjectWithId) => {
        if (!selection.count()) {
            firstSelected = object.id;
        }
        selection.select(object as ObjectWithId);
    };

    const deselect = (id: string) => {
        selection.deselect(id);
        if (!selection.count()) {
            firstSelected = undefined;
        }
    };

    const toggleSelected = (object: ObjectWithId) => {
        if (selection.hasId(object.id)) {
            deselect(object.id);
        } else {
            select(object);
        }
    };

    const setSelection = (objects: ObjectWithId[]) => {
        firstSelected = objects[0]?.id;
        selection.setSelection(objects);
    };

    const dispose = () => undefined;

    return {
        getSelection: selection.objects,
        getFirstSelected,
        isSelected: selection.hasId,
        select,
        toggleSelected,
        deselect,
        setSelection,
        clearSelection: selection.clearSelection,
        dispose,
    };
};
