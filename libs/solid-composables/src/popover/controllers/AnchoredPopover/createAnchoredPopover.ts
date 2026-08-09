import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { combineProps, computedProps, shortId } from '@no-comply/solid-primitives';
import { createMemo } from 'solid-js';

import { createPlacement } from '../../../placement';
import { createPopover } from '../Popover';

import { $ANCHORED_POPOVER } from './constants';
import { createAnchoredPopoverTrigger } from './createAnchoredPopoverTrigger';
import type { AnchoredPopoverAPI, AnchoredPopoverProps } from './types';

export const createAnchoredPopover = (props: AnchoredPopoverProps): AnchoredPopoverAPI => {
	const [locals, expose, compose] = createExposable($ANCHORED_POPOVER, props);

	const {
		$anchor: $placementAnchor,
		$target: $placementTarget,
		update: updatePlacement,
		reset: resetPlacement,
	} = createPlacement(locals);

	const popoverProps = combineProps(locals, {
		onShow: updatePlacement,
		onHide: resetPlacement,
	});
	const { $root: $popoverRoot, context, contextValue } = compose(createPopover(popoverProps));

	const popoverStaticProps = { component: 'div' } as const;
	const $popover = combineProps($popoverRoot, popoverStaticProps);

	const randomId = createMemo(shortId);
	const triggerId = () => randomId();

	const triggerProps = computedProps({
		id: triggerId,
		targetId: context.id,
		expanded: context.isShown,
	});
	const { $root: $triggerRoot } = compose(createAnchoredPopoverTrigger(triggerProps));

	const $content = computedProps({
		id: context.id,
		'aria-labelledby': triggerId,
	});

	return exposeAPI(expose, '$root', {
		$root: combineProps($popover, $placementTarget),
		$trigger: combineProps($triggerRoot, $placementAnchor),
		$content,
		context,
		contextValue,
	});
};
