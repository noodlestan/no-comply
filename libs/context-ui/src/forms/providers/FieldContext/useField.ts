import type { FieldContext } from '../../contexts';
import { useFieldContextMaybe } from '../../private';

export const useField = (): FieldContext => {
    const [context] = useFieldContextMaybe() || [];
    if (!context) {
        throw new Error('useField() must be wrapped in <FieldContextProvider/>');
    }

    return context;
};
