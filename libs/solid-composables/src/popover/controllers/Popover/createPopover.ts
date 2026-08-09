import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { combineProps, computedProps } from '@no-comply/solid-primitives';

import { createFocusOut } from '../../../focus';
import { createPopoverContext } from '../../contexts';

import { $POPOVER } from './constants';
import type { PopoverAPI, PopoverProps } from './types';

export const createPopover = (props: PopoverProps): PopoverAPI => {
	const [locals, expose, compose] = createExposable($POPOVER, props);

	const contextValue = compose(createPopoverContext(locals));
	const [context] = contextValue;

	const setFocus = () => {
		const popoverEl = context.popoverEl();
		if (!popoverEl) {
			return;
		}
		const el = popoverEl.querySelector('[data-popover-focus-target]') as HTMLElement;
		if (!el) {
			return;
		}
		const tabIndex = el.tabIndex;
		el.tabIndex = 0;
		el.focus();
		el.tabIndex = tabIndex ?? -1;
	};

	const onToggle = () => {
		if (context.isShown()) {
			setTimeout(setFocus);
			locals.onShow?.();
		} else {
			locals.onHide?.();
		}
	};

	const handleFocusOut = () => {
		const popoverEl = context.popoverEl();
		if (!popoverEl) {
			return;
		}
		requestAnimationFrame(() => {
			if (!popoverEl.contains(document.activeElement)) {
				popoverEl?.hidePopover();
			}
		});
	};

	const { $root: $focusOutRoot } = createFocusOut({ onFocusOut: handleFocusOut });

	const $static = {
		popover: 'auto' as const,
		ref: context.setPopoverRef,
		onToggle,
	};

	const $root = computedProps($static, {
		id: context.id,
	});

	return exposeAPI(expose, '$root', {
		$root: combineProps($root, $focusOutRoot),
		context,
		contextValue,
	});
};
