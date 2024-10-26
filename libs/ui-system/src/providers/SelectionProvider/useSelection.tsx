import { useContext } from 'solid-js';

import { ObjectWithId } from '../../types';

import { SelectionContext } from './private/SelectionContext';
import { ObjectFilter, SelectionAPI } from './types';

export const useSelection = (filter?: ObjectFilter): SelectionAPI => {
    const api = useContext(SelectionContext);
    if (!('dispose' in api)) {
        throw new Error('useSelection() must be wrapped in <SelectionProvider/>');
    }

    if (!filter) {
        return api as unknown as SelectionAPI;
    }

    const count = (overrideFilter?: ObjectFilter): number => {
        return api.count(overrideFilter || filter);
    };

    const objects = <O extends ObjectWithId>(overrideFilter?: ObjectFilter): O[] => {
        return api.objects((overrideFilter || filter) as ObjectFilter);
    };

    return {
        ...api,
        count,
        objects,
    } as SelectionAPI;
};
