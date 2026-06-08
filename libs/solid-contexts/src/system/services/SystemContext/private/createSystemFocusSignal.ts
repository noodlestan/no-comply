import { type Accessor, createSignal, onCleanup } from 'solid-js';

export const createSystemFocusSignal = (): Accessor<boolean> => {
	const [hasFocus, setHasFocus] = createSignal(
		document.visibilityState === 'visible' && document.hasFocus(),
	);

	const updateFocus = () => {
		setHasFocus(document.visibilityState === 'visible' && document.hasFocus());
	};

	document.addEventListener('visibilitychange', updateFocus);
	window.addEventListener('focus', updateFocus);
	window.addEventListener('blur', updateFocus);

	onCleanup(() => {
		document.removeEventListener('visibilitychange', updateFocus);
		window.removeEventListener('focus', updateFocus);
		window.removeEventListener('blur', updateFocus);
	});

	return hasFocus;
};
