import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { combineProps } from '@no-comply/solid-primitives';

import { createPopover } from '../../controllers';
import { createPopoverMixin } from '../../mixins';

import { $POPOVER_BASE } from './constants';
import type { PopoverBaseAPI, PopoverBaseProps } from './types';

export const createPopoverBase = (props: PopoverBaseProps): PopoverBaseAPI => {
	const [locals, expose, compose] = createExposable($POPOVER_BASE, props);

	const { $root: $popoverRoot, ...rest } = compose(createPopover(locals));
	const { $root: $mixinRoot } = compose(createPopoverMixin());

	return exposeAPI(expose, '$root', {
		...rest,
		$root: combineProps($popoverRoot, $mixinRoot),
	});
};
