import { useContext } from 'solid-js';

import { ObjectWithId } from '../../types';

import { SelectionContext } from './private';
import { ObjectFilter, SelectionAPI } from './types';

export const useSelection = (filter?: ObjectFilter): SelectionAPI => {
    const context = useContext(SelectionContext);
    if (!context) {
        throw new Error('useSelection() must be wrapped in <SelectionProvider/>');
    }

    if (!filter) {
        return context as unknown as SelectionAPI;
    }

    const count = (overrideFilter?: ObjectFilter): number => {
        return context.count(overrideFilter || filter);
    };

    const objects = <O extends ObjectWithId>(overrideFilter?: ObjectFilter): O[] => {
        return context.objects((overrideFilter || filter) as ObjectFilter);
    };

    return {
        ...context,
        count,
        objects,
    } as SelectionAPI;
};
