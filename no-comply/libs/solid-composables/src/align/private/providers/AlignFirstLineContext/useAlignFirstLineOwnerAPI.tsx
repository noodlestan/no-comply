import { useContext } from 'solid-js';

import type { AlignFirstLineContextOwnerAPI } from '../../../contexts';

import { AlignFirstLineContextCTX } from './AlignFirstLineContextCTX';

export const useAlignFirstLineOwnerAPI = (): AlignFirstLineContextOwnerAPI => {
	const context = useContext(AlignFirstLineContextCTX);

	if (!context) {
		throw new Error(
			'useAlignFirstLineOwnerAPI() must be wrapped in <AlignFirstLineContextProvider/>',
		);
	}

	return context[1];
};
