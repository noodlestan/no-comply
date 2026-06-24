import { type ClosedTagProps, combineProps } from '@no-comply/solid-primitives';
import { type ParentComponent, splitProps } from 'solid-js';

import { Flex } from '../../../layout';
import { SegmentedButtonContextProvider } from '../../providers';

import { SEGMENTED_BUTTON_PROPS } from './constants';
import { createSegmentedButton } from './createSegmentedButton';
import type { SegmentedButtonProps } from './types';

type Props = ClosedTagProps & SegmentedButtonProps;

export const SegmentedButton: ParentComponent<Props> = props => {
	const [locals, $others] = splitProps(props, [...SEGMENTED_BUTTON_PROPS, 'children']);

	const { $root, contextValue } = createSegmentedButton(locals);
	const $ = combineProps($root, $others);

	return (
		<SegmentedButtonContextProvider context={contextValue}>
			<Flex direction="row" align="center" gap="none" {...$}>
				{props.children}
			</Flex>
		</SegmentedButtonContextProvider>
	);
};
