import { useContext } from 'solid-js';

import { OverflowItemsMeasureContextCTX } from './private';
import type { OverflowItemsMeasureContext } from './types';

export const useOverflowItemsMeasureMaybe = (): OverflowItemsMeasureContext | undefined => {
	return useContext(OverflowItemsMeasureContextCTX);
};
