import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import {
	type PickRequired,
	combineProps,
	computedProps,
	createClassList,
} from '@no-comply/solid-primitives';

import { createInputTypographyMixin } from '../../../typography';

import styles from './SizedInputBoxMixin.module.scss';
import { $SIZED_INPUT_BOX_MIXIN } from './constants';
import type { SizedInputBoxMixinAPI, SizedInputBoxMixinProps } from './types';

const defaultProps: PickRequired<SizedInputBoxMixinProps, 'size'> = {
	size: 'normal',
};

export const createSizedInputBoxMixin = (props: SizedInputBoxMixinProps): SizedInputBoxMixinAPI => {
	const [locals, expose, compose] = createExposable($SIZED_INPUT_BOX_MIXIN, props);

	const size = () => locals.size ?? defaultProps.size;
	const classList = createClassList(styles, () => [`SizedInputBox`, `size-${size()}`]);

	const inputTypographyProps = computedProps({ variant: () => props.size });
	const { $root: $inputTypographyMixinRoot } = compose(
		createInputTypographyMixin(inputTypographyProps),
	);

	const $root = computedProps({
		classList,
	});

	return exposeAPI(expose, '$root', {
		$root: combineProps($inputTypographyMixinRoot, $root),
		size,
	});
};
