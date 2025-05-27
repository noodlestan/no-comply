import { useContext } from 'solid-js';

import type { ComposableTypeMixinProps } from '../../mixins';

import { FirstLineAlignContextCTX } from './private';

export const useFirstLineAlign = <T extends ComposableTypeMixinProps>(
    type: ComposableTypeMixinProps['type'],
): T => {
    const context = useContext(FirstLineAlignContextCTX);
    if (!context) {
        throw new Error('useFirstLineAlign() must be wrapped in <FirstLineAlignContextProvider/>');
    }

    if (context.type !== type) {
        console.error(`FirstLineAlign type mismatch. Expected "${type}" but "${context.type}".`);
    }
    return context as T;
};
