import { useContext } from 'solid-js';

import type { FieldContext } from '../../../contexts';

import { FieldContextCTX } from './FieldContextCTX';

export const useFieldContextMaybe = (): [FieldContext] | undefined => {
	return useContext(FieldContextCTX);
};
