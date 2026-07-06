import { useContext } from 'solid-js';

import type { AlignFirstLineContext } from '../../../contexts';

import { AlignFirstLineContextCTX } from './AlignFirstLineContextCTX';

export const useAlignFirstLineContextMaybe = (): AlignFirstLineContext | undefined => {
	const context = useContext(AlignFirstLineContextCTX);
	return context ? context[0] : undefined;
};
