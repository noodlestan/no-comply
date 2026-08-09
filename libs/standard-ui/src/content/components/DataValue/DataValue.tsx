import {
	type PickRequired,
	combineProps,
	computedProps,
	createClassList,
} from '@no-comply/solid-primitives';
import type { ParentComponent } from 'solid-js';

import { createContentLengthMixin } from '../../mixins';

import styles from './DataValue.module.scss';
import type { DataValueProps } from './types';

const defaultProps: PickRequired<DataValueProps, 'size' | 'length' | 'align'> = {
	size: 'normal',
	length: 'auto',
	align: 'left',
};

export const DataValue: ParentComponent<DataValueProps> = props => {
	const size = () => props.size ?? defaultProps.size;

	const handleClick = () => props.onClick?.();

	const handleKeyDown = (ev: KeyboardEvent) => {
		if (ev.key === 'Enter') {
			props.onClick?.();
		}
	};

	const tabindex = () => (props.onClick ? 0 : undefined);
	const role = () => (props.onClick ? 'button' : undefined);

	const classList = createClassList(styles, () => ({
		DataValue: true,
		[`align-right`]: props.align === 'right',
		[`is-interactive`]: Boolean(props.onClick),
		[`size-${size()}`]: true,
		[`wrap`]: !!props.wrap,
	}));

	const $root = computedProps({
		classList,
	});

	const { $root: $contentLengthMixinRoot } = createContentLengthMixin(props);

	const $ = combineProps($contentLengthMixinRoot, $root);

	return (
		<div role={role()} onClick={handleClick} onKeyDown={handleKeyDown} tabIndex={tabindex()} {...$}>
			{props.value ?? props.children}
		</div>
	);
};
