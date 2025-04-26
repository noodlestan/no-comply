import { useContext } from 'solid-js';

import type { FormContextValue } from '../../../contexts';

import { FormContextCTX } from './FormContextCTX';

export const useFormContextMaybe = (): FormContextValue | undefined => {
    return useContext(FormContextCTX);
};
