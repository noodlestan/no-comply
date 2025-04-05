import { createContext } from 'solid-js';

import type { FormContext as FormContextValue } from '../../../contexts';

export const FormContext = createContext<FormContextValue>();
