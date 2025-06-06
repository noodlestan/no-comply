import { createExposable, exposeAPI } from '@no-comply/solid-contexts';

import { createFocusTrap } from '../../controllers';

import { $FOCUS_TRAP_BASE } from './constants';
import type { FocusTrapBaseAPI, FocusTrapBaseProps } from './types';

export const createFocusTrapBase = (props: FocusTrapBaseProps): FocusTrapBaseAPI => {
	const [locals, expose, compose] = createExposable($FOCUS_TRAP_BASE, props);

	const { $root: $focusTrapRoot } = compose(createFocusTrap(locals));

	return exposeAPI(expose, '$root', {
		$root: $focusTrapRoot,
	});
};
