import {
	createFieldLabelMixin,
	createFieldLabel as createHeadlessFieldLabel,
} from '@no-comply/solid-composables';
import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import {
	type PickRequired,
	combineProps,
	computedProps,
	createClassList,
} from '@no-comply/solid-primitives';

import styles from './FieldLabel.module.scss';
import { $FIELD_LABEL } from './constants';
import type { FieldLabelAPI, FieldLabelProps } from './types';

const defaultProps: PickRequired<FieldLabelProps, 'size'> = {
	size: 'normal',
};

export const createFieldLabel = (props: FieldLabelProps): FieldLabelAPI => {
	const [locals, expose, compose] = createExposable($FIELD_LABEL, props);

	const { $root: $fieldLabelRoot } = compose(createHeadlessFieldLabel(locals));
	const { $root: $fieldLabelMixinRoot } = compose(createFieldLabelMixin());

	const size = () => locals.size ?? defaultProps.size;
	const classList = createClassList(styles, () => ['FieldLabel', `size-${size()}`]);

	const $root = computedProps({
		classList,
	});

	return exposeAPI(expose, '$root', {
		$root: combineProps($fieldLabelRoot, $fieldLabelMixinRoot, $root),
	});
};
