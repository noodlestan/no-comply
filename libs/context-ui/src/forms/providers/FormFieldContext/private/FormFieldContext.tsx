import { createContext } from 'solid-js';

import type { FormFieldContext as FormFieldContextValue } from '../../../contexts';

export const FormFieldContext = createContext<FormFieldContextValue>();
