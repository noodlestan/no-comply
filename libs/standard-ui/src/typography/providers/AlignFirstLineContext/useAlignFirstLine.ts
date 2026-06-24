import { useContext } from 'solid-js';

import type { ComposableTypeMixinProps } from '../../mixins';

import { AlignFirstLineContextCTX } from './private';

export const useAlignFirstLine = <T extends ComposableTypeMixinProps>(
	type: ComposableTypeMixinProps['type'],
): T => {
	const context = useContext(AlignFirstLineContextCTX);
	if (!context) {
		throw new Error('useAlignFirstLine() must be wrapped in <AlignFirstLineContextProvider/>');
	}

	if (context.type !== type) {
		console.error(`AlignFirstLine type mismatch. Expected "${type}" but "${context.type}".`);
	}
	return context as T;
};
