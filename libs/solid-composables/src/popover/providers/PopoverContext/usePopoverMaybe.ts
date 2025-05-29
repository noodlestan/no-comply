import { useContext } from 'solid-js';

import type { PopoverContext } from '../../contexts';

import { PopoverContextCTX } from './private';

export const usePopoverMaybe = (): PopoverContext | undefined => {
    const [context] = useContext(PopoverContextCTX) || [];
    return context;
};
