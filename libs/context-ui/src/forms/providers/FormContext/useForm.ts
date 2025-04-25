import type { FormContext } from '../../contexts';
import { useFormContextMaybe } from '../../private';

export const useForm = (): FormContext => {
    const [context] = useFormContextMaybe() || [];
    if (!context) {
        throw new Error('useForm() must be wrapped in <FormContextProvider/>');
    }

    return context;
};
