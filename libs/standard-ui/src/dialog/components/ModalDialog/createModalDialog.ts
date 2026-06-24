import {
	createModalDialog as createHeadlessModalDialog,
	createModalDialogMixin,
} from '@no-comply/solid-composables';
import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import {
	type PickRequired,
	combineProps,
	computedProps,
	createClassList,
} from '@no-comply/solid-primitives';

import styles from './ModalDialog.module.scss';
import { $MODAL_DIALOG } from './constants';
import type { ModalDialogAPI, ModalDialogProps } from './types';

const defaultProps: PickRequired<ModalDialogProps, 'size'> = {
	size: 'm',
};

export const createModalDialog = (props: ModalDialogProps): ModalDialogAPI => {
	const [locals, expose, compose] = createExposable($MODAL_DIALOG, props);

	const {
		$root: $dialogRoot,
		$label,
		$description,
		context,
		contextValue,
	} = compose(createHeadlessModalDialog(locals));
	const { $root: $dialogMixinRoot } = compose(createModalDialogMixin());

	const size = () => locals.size ?? defaultProps.size;
	const classList = createClassList(styles, () => ['ModalDialog', `size-${size()}`]);

	const $root = computedProps({
		classList,
	});

	const _surface = {
		variant: 'dialog' as const,
	};

	return exposeAPI(expose, '_surface', {
		_surface: combineProps(_surface, $dialogRoot, $dialogMixinRoot, $root),
		$label,
		$description,
		context,
		contextValue,
	});
};
