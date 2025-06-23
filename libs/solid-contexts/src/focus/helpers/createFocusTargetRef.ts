import { useFocusTargetContext } from '../providers';
import type { FocusTargetName } from '../types';

import { createFocusTargetAPI } from './private';

type FocusTargetRefAPI = [setRef: (el: HTMLElement) => void, setFocus: () => void];

type FocusTargetRefOptions = {
	transient?: boolean;
};

export const createFocusTargetRef = (
	target: FocusTargetName,
	options: FocusTargetRefOptions = {},
): FocusTargetRefAPI => {
	const context = useFocusTargetContext();

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
