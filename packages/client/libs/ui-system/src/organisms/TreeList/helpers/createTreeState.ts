import { ReactiveSet } from '@solid-primitives/set';

import { SelectionAPI } from '../../../providers';
import { ObjectWithId } from '../../../types';
import { TreeState } from '../types';

export function createTreeState(
    selection: SelectionAPI,
    expandSet?: ReactiveSet<string>,
): TreeState {
    console.info('createTreeState()');

    const expanded = expandSet || new ReactiveSet<string>();
    let firstSelected: string | undefined;

    const isExpanded = (id: string) => expanded.has(id);

    const expand = (id: string | string[]) => {
        if (Array.isArray(id)) {
            id.forEach(i => expanded.add(i));
        } else {
            expanded.add(id);
        }
    };

    const toggleExpanded = (id: string) => {
        if (expanded.has(id)) {
            expanded.delete(id);
        } else {
            expanded.add(id);
        }
    };

    const collapse = (id: string | string[]) => {
        if (Array.isArray(id)) {
            id.forEach(i => expanded.delete(i));
        } else {
            expanded.delete(id);
        }
    };

    const getFirstSelected = (): ObjectWithId | undefined => {
        if (firstSelected) {
            return selection.getById(firstSelected);
        }
    };

    const select = (object: ObjectWithId) => {
        if (!selection.count()) {
            firstSelected = object.id;
        }
        selection.select(object);
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
        firstSelected = objects.length ? objects[0].id : undefined;
        selection.setSelection(objects);
    };

    const dispose = () => {
        expanded.clear();
    };

    return {
        expanded,
        isExpanded,
        expand,
        toggleExpanded,
        collapse,
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
}
