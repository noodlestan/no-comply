/* eslint-disable jsx-a11y/interactive-supports-focus */
import {
	type IconComponent,
	type PickRequired,
	createClassList,
} from '@no-comply/solid-primitives';
import { type JSX, type ParentComponent, Show } from 'solid-js';

import { Icon } from '../../../icon';
import { Label } from '../../../typography';
import { DataValue } from '../DataValue';

import styles from './DataItem.module.scss';
import type { DataItemProps } from './types';

const defaultProps: PickRequired<DataItemProps, 'size'> = {
	size: 'normal',
};

export const DataItem: ParentComponent<DataItemProps> = props => {
	const size = () => props.size ?? defaultProps.size;

	const handleKeyDown = (ev: KeyboardEvent) => {
		if (ev.key === 'Enter') {
			props.onClick?.();
		}
	};

	const classList = createClassList(styles, () => ['DataItem', `DataItem-size-${size()}`]);

	const elementProps = (): JSX.HTMLAttributes<HTMLDivElement> => {
		if (props.onClick) {
			return {
				role: 'button',
				tabIndex: 0,
				onClick: props.onClick,
				onKeyDown: handleKeyDown,
			};
		}
		return {};
	};

	return (
		<div {...elementProps()} classList={classList()}>
			<Show when={props.icon}>
				<Icon icon={props.icon as IconComponent} size={props.size} />
			</Show>
			<Show when={props.label}>
				<Label size={props.size}>{props.label}</Label>
			</Show>
			<DataValue
				align={props.units ? 'right' : 'left'}
				size={props.size}
				length={props.length}
				onClick={props.onClick}
				value={props.value ?? props.children}
			/>
			<Show when={props.units}>
				<Label size={props.size}>{props.units}</Label>
			</Show>
		</div>
	);
};
