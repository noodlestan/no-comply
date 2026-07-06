import {
	createAnchoredPopoverMixin,
	createAnchoredPopover as createHeadlessAnchoredPopover,
} from '@no-comply/solid-composables';
import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { combineProps } from '@no-comply/solid-primitives';

import { $ANCHORED_POPOVER } from './constants';
import type { AnchoredPopoverAPI, AnchoredPopoverProps } from './types';

export const createAnchoredPopover = (props: AnchoredPopoverProps): AnchoredPopoverAPI => {
	const [locals, expose, compose] = createExposable($ANCHORED_POPOVER, props);

	const { $root: $anchoredPopoverRoot, ...rest } = compose(createHeadlessAnchoredPopover(locals));
	const { $root: $mixinRoot } = compose(createAnchoredPopoverMixin());

	return exposeAPI(expose, '$root', {
		...rest,
		$root: combineProps($anchoredPopoverRoot, $mixinRoot),
	});
};
