import { createSelection } from '@no-comply/solid-contexts';
import { type ObjectWithId, withDefault } from '@no-comply/solid-primitives';

import type { ListContextOptions, ListContextValue } from './types';

export const createListContext = (options: ListContextOptions): ListContextValue => {
    const selected = withDefault(
        () => options.selected,
        () => createSelection()[0],
    );

    let firstSelected: string | undefined;

    const getFirstSelected = (): ObjectWithId | undefined => {
        if (firstSelected) {
            return selected().getById(firstSelected);
        }
    };

    const select = (object: ObjectWithId) => {
        if (!selected().count()) {
            firstSelected = object.id;
        }
        selected().select(object as ObjectWithId);
    };

    const deselect = (id: string) => {
        selected().deselect(id);
        if (!selected().count()) {
            firstSelected = undefined;
        }
    };

    const toggleSelected = (object: ObjectWithId) => {
        if (selected().hasId(object.id)) {
            deselect(object.id);
        } else {
            select(object);
        }
    };

    const setSelection = (objects: ObjectWithId[]) => {
        firstSelected = objects[0]?.id;
        selected().setSelection(objects);
    };

    const dispose = () => undefined;

    const context = {
        type: 'list' as const,
        components: () => options.components,
        items: () => options.items,
        isDisabled: () => Boolean(options.disabled),
        getSelection: () => selected().objects(),
        getFirstSelected,
        isItemSelected: (id: string) => selected().hasId(id),
        select,
        toggleSelected,
        deselect,
        setSelection,
        clearSelection: () => selected().clearSelection(),
        dispose,
    };

    return [context];
};
