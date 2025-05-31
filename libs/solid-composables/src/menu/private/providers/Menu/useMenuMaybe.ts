import { useContext } from 'solid-js';

import type { MenuContext } from '../../contexts';

import { MenuContextCTX } from './MenuContextCTX';

export const useMenuMaybe = (): MenuContext | undefined => {
    const [context] = useContext(MenuContextCTX) || [];
    return context;
};
