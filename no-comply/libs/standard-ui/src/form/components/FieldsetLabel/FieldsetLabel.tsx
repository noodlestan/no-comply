import { type PickRequired, createClassList } from '@no-comply/solid-primitives';
import type { ParentComponent } from 'solid-js';

import styles from './FieldsetLabel.module.scss';
import type { FieldsetLabelProps } from './types';

const defaultProps: PickRequired<FieldsetLabelProps, 'size'> = {
	size: 'normal',
};

export const FieldsetLabel: ParentComponent<FieldsetLabelProps> = props => {
	const size = () => props.size ?? defaultProps.size;

	const classList = createClassList(styles, () => ['FieldsetLabel', `size-${size()}`]);

	return <label classList={classList()}>{props.children}</label>;
};
