import { createAriaDialog } from '@no-comply/solid-accessibility';
import { createExposable, createModalContext, exposeAPI } from '@no-comply/solid-contexts';
import { combineProps, computedProps, dataBoolean } from '@no-comply/solid-primitives';

import { createFocusTrap } from '../../../focus';

import { $MODAL_DIALOG } from './constants';
import type { ModalDialogAPI, ModalDialogProps } from './types';

export const createModalDialog = (props: ModalDialogProps = {}): ModalDialogAPI => {
	const [locals, expose] = createExposable($MODAL_DIALOG, props);

	const contextValue = createModalContext(locals);
	const [context] = contextValue;

	const { $root: $dialogRoot, $label, $description } = createAriaDialog(locals);

	const $dialogContextRoot = {
		ref: context.setTargetRef,
	};

	const { $root: $focusTrapRoot } = createFocusTrap(locals);

	const stopPropagation = (ev: Event) => ev.stopImmediatePropagation();

	const handleKeyDown = async (ev: KeyboardEvent) => {
		if (ev.key === 'Escape') {
			locals.onDiscard?.(context);
		}
	};

	const $static = {
		component: 'dialog' as const,
		onKeyDown: handleKeyDown,
		onKeyUp: stopPropagation,
		onKeyPress: stopPropagation,
	};
	const $root = computedProps($static, {
		'data-modal-dialog-is-active': () => dataBoolean(context.isActive()),
	});

	return exposeAPI(expose, '$root', {
		$root: combineProps($dialogRoot, $dialogContextRoot, $focusTrapRoot, $root),
		$label,
		$description,
		context,
		contextValue,
	});
};
