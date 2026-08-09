import { createFieldMixin, createField as createHeadlessField } from '@no-comply/solid-composables';
import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import {
	type PickRequired,
	combineProps,
	computedProps,
	createClassList,
} from '@no-comply/solid-primitives';

import styles from './Field.module.scss';
import { $FIELD } from './constants';
import type { FieldAPI, FieldProps } from './types';

const defaultProps: PickRequired<FieldProps, 'size'> = {
	size: 'normal',
};

export const createField = (props: FieldProps): FieldAPI => {
	const [locals, expose, compose] = createExposable($FIELD, props);

	const {
		$root: $fieldRoot,
		$label: $fieldLabel,
		hasFeedback,
		...rest
	} = compose(createHeadlessField(locals));
	const { $root: $fieldMixinRoot } = compose(createFieldMixin());

	const size = () => locals.size || defaultProps.size;
	const classList = createClassList(styles, () => ['Field', `size-${size()}`]);

	const $root = computedProps({
		classList,
	});

	const _fieldLabel = computedProps({
		size,
	});

	return exposeAPI(expose, '$root', {
		...rest,
		$root: combineProps($fieldRoot, $fieldMixinRoot, $root),
		_fieldLabel: combineProps($fieldLabel, _fieldLabel),
		hasFeedback,
	});
};
