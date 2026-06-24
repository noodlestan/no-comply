import { combineProps } from '@no-comply/solid-primitives';
import { type ParentComponent, splitProps } from 'solid-js';

import { Label } from '../../../typography';

import { createSegmentedButtonItem } from './createSegmentedButtonItem';
import type { SegmentedButtonItemProps } from './types';
// import { Icon } from '../../../icon';

export const SegmentedButtonItem: ParentComponent<SegmentedButtonItemProps> = props => {
	const [locals, $others] = splitProps(props, ['value', 'children']);

	const { $root, $label, $radio } = createSegmentedButtonItem(locals);

	const $ = combineProps($others, $root);

	return (
		<div {...$}>
			<Label {...$label}>{locals.children}</Label>
			<input {...$radio} />
			{/* <Icon src={} /> */}
		</div>
	);
};
