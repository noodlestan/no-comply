import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { combineProps, computedProps, shortId } from '@no-comply/solid-primitives';
import { createMemo } from 'solid-js';

import { createPlacement } from '../../../placement';
import { createPopover } from '../Popover';

import { $ANCHORED_POPOVER } from './constants';
import type {
	AnchoredPopoverAPI,
	AnchoredPopoverProps,
	AnchoredPopoverTriggerAPI,
	AnchoredPopoverTriggerProps,
} from './types';

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
