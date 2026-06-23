import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { computedProps, shortId } from '@no-comply/solid-primitives';
import { createMemo } from 'solid-js';

import { $ANCHORED_POPOVER } from './constants';
import type { AnchoredPopoverTriggerAPI, AnchoredPopoverTriggerProps } from './types';

export const createAnchoredPopoverTrigger = (
	props: AnchoredPopoverTriggerProps,
): AnchoredPopoverTriggerAPI => {
	const [locals, expose] = createExposable($ANCHORED_POPOVER, props);

	const randomId = createMemo(shortId);
	const id = () => locals.id ?? randomId();

	const $static = {
		popoverTargetAction: 'toggle',
		'aria-haspopup': 'true',
	} as const;

	const $root = computedProps($static, {
		id,
		ref: () => locals.ref,
		popoverTarget: () => locals.targetId,
		'aria-expanded': () => locals.expanded,
	});

	return exposeAPI(expose, '$root', {
		$root,
	});
};
