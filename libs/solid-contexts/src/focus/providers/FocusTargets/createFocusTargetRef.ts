import { useContext } from 'solid-js';

import { type FocusTargetName } from '../../services';

import { FocusTargetsCTX, createFocusTargetAPI } from './private';

type FocusTargetRefAPI = [setRef: (el: HTMLElement) => void, setFocus: () => void];

type FocusTargetRefOptions = {
	transient?: boolean;
};

export const createFocusTargetRef = (
	target: FocusTargetName,
	options: FocusTargetRefOptions = {},
): FocusTargetRefAPI => {
	const context = useContext(FocusTargetsCTX);
	if (!context) {
		throw new Error('createFocusTarget() must be wrapped in <FocusServiceProvider/>');
	}

	const [setTarget, setFocus] = createFocusTargetAPI(context, target);

	const setRef = (el: HTMLElement) => {
		setTarget(() => {
			if (options.transient) {
				el.tabIndex = 0;
			}
			el.focus();
			if (options.transient) {
				el.removeAttribute('tabIndex');
			}
		});
	};

	return [setRef, setFocus];
};
