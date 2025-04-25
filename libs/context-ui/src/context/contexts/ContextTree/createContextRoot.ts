import { useContext } from 'solid-js';

import {
    type ContextNodeOptions,
    type ContextNodeValue,
    ContextRootCTX,
    createContextNodePrivate,
} from '../../private';

export const createContextRoot = (options: ContextNodeOptions = {}): ContextNodeValue => {
    const maybeRooot = useContext(ContextRootCTX);
    if (maybeRooot) {
        throw new Error('createContextRoot() must not be wrapped in <ContextRootProvider/>');
    }

    return createContextNodePrivate(undefined, options);
};
