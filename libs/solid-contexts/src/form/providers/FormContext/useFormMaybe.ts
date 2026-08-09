import type { FormContext } from '../../contexts';
import { useFormContextMaybe } from '../../private';

export const useFormMaybe = (): FormContext | undefined => {
	const [context] = useFormContextMaybe() || [];
	return context;
};
