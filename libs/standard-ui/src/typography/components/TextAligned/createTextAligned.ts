import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { combineProps } from '@no-comply/solid-primitives';

import type { ComposableTextProps } from '../../mixins';
import { useAlignFirstLine } from '../../providers';
import { createText } from '../Text';

import { $TEXT_ALIGNED } from './constants';
import type { TextAlignedAPI, TextAlignedProps } from './types';

export const createTextAligned = (props: TextAlignedProps): TextAlignedAPI => {
	const [locals, expose, compose] = createExposable($TEXT_ALIGNED, props);

	const alignedProps = useAlignFirstLine<ComposableTextProps>('text');

	const merged = combineProps(locals, alignedProps, { aligned: true });

	const { $root: $actionLabelRoot } = compose(createText(merged));

	return exposeAPI(expose, '$root', {
		$root: $actionLabelRoot,
	});
};
