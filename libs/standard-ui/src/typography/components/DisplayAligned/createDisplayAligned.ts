import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { combineProps } from '@no-comply/solid-primitives';

import type { ComposableDisplayProps } from '../../mixins';
import { useAlignFirstLine } from '../../providers';
import { createDisplay } from '../Display';

import { $DISPLAY_ALIGNED } from './constants';
import type { DisplayAlignedAPI, DisplayAlignedProps } from './types';

export const createDisplayAligned = (props: DisplayAlignedProps): DisplayAlignedAPI => {
	const [locals, expose, compose] = createExposable($DISPLAY_ALIGNED, props);

	const alignedProps = useAlignFirstLine<ComposableDisplayProps>('display');

	const merged = combineProps(locals, alignedProps, { aligned: true });

	const { $root: $displayRoot } = compose(createDisplay(merged));

	return exposeAPI(expose, '$root', {
		$root: $displayRoot,
	});
};
