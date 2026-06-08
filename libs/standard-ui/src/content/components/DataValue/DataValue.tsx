import { type PickRequired, createClassList } from '@no-comply/solid-primitives';
import type { ParentComponent } from 'solid-js';

import styles from './DataValue.module.scss';
import type { DataValueLength, DataValueProps } from './types';

const defaultProps: PickRequired<DataValueProps, 'size' | 'length' | 'align'> = {
	size: 'normal',
	length: 'auto',
	align: 'left',
};

const makeLength = (length: number | DataValueLength): string => {
	if (typeof length === 'number') {
		return `${length * 0.63 + 0.5}em`;
	}
	if (length === 'auto') {
		return `min-content`;
	}
	if (length === 'full') {
		return '100%';
	}
	return `var(--data-value-length-${length})`;
};

const makeStyle = (length?: DataValueLength | number) =>
	length ? { '--data-value-length': makeLength(length) } : {};

export const DataValue: ParentComponent<DataValueProps> = props => {
	const size = () => props.size ?? defaultProps.size;
	const length = () => props.length ?? defaultProps.length;

	const handleClick = () => props.onClick?.();

	const handleKeyDown = (ev: KeyboardEvent) => {
		if (ev.key === 'Enter') {
			props.onClick?.();
		}
	};

	const tabindex = () => (props.onClick ? 0 : undefined);

	const classList = createClassList(styles, () => ({
		DataValue: true,
		[`align-right`]: props.align === 'right',
		[`is-interactive`]: Boolean(props.onClick),
		[`size-${size()}`]: true,
		[`wrap`]: !!props.wrap,
	}));

	const role = () => (props.onClick ? 'button' : undefined);

	const style = () => makeStyle(length());

	return (
		<div
			role={role()}
			onClick={handleClick}
			onKeyDown={handleKeyDown}
			tabIndex={tabindex()}
			classList={classList()}
			style={style()}
		>
			{props.value ?? props.children}
		</div>
	);
};
