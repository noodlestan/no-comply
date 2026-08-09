import { createSizedTypographyMixin, createTypographyMixin } from '@no-comply/solid-composables';
import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import {
	type PickRequired,
	combineProps,
	computedProps,
	createClassList,
} from '@no-comply/solid-primitives';

import styles from './ActionLabelMixin.module.scss';
import { $ACTION_LABEL_MIXIN } from './constants';
import type { ActionLabelMixinAPI, ActionLabelMixinProps } from './types';

const defaultProps: PickRequired<ActionLabelMixinProps, 'size'> = {
	size: 'normal',
};

export const createActionLabelMixin = (props: ActionLabelMixinProps): ActionLabelMixinAPI => {
	const [locals, expose, compose] = createExposable($ACTION_LABEL_MIXIN, props);

	const size = () => locals.size ?? defaultProps.size;

	const classList = createClassList(styles, () => ['ActionLabel', `size-${size()}`]);

	const { $root: $typographyMixinRoot } = compose(createTypographyMixin(locals));

	const { $root: $sizedTypographyRoot } = compose(createSizedTypographyMixin(locals, classList));

	const $root = computedProps({
		classList,
	});

	return exposeAPI(expose, '$root', {
		$root: combineProps($typographyMixinRoot, $sizedTypographyRoot, $root),
	});
};
