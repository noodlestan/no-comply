import { type FocusContext, useFocusContextMaybe } from '../../private';

export const useFocus = (): FocusContext => {
	const [context] = useFocusContextMaybe() || [];
	if (!context) {
		throw new Error('useFocus() must be wrapped in <FocusContextProvider/>');
	}

	return context;
};
