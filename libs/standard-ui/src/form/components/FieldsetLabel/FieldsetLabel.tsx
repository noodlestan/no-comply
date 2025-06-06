import { type ClassList, type PickRequired, createClassList } from '@no-comply/solid-primitives';
import type { ParentComponent } from 'solid-js';

import type { ContentSize } from '../../../types';

import styles from './FieldsetLabel.module.scss';

export type FieldsetLabelProps = {
	size?: ContentSize;
	classList?: ClassList;
};

const defaultProps: PickRequired<FieldsetLabelProps, 'size'> = {
	size: 'normal',
};

export const FieldsetLabel: ParentComponent<FieldsetLabelProps> = props => {
	const size = () => props.size ?? defaultProps.size;

	const classList = createClassList(styles, () => ['FieldsetLabel', `size-${size()}`]);

	return <label classList={classList()}>{props.children}</label>;
};
