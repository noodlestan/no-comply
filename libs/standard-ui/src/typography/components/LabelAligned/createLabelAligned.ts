import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { combineProps } from '@no-comply/solid-primitives';

import type { ComposableLabelProps } from '../../mixins';
import { useAlignFirstLine } from '../../providers';
import { createLabel } from '../Label';

import { $LABEL_ALIGNED } from './constants';
import type { LabelAlignedAPI, LabelAlignedProps } from './types';

export const createLabelAligned = (props: LabelAlignedProps): LabelAlignedAPI => {
	const [locals, expose, compose] = createExposable($LABEL_ALIGNED, props);

	const alignedProps = useAlignFirstLine<ComposableLabelProps>('label');

	const merged = combineProps(locals, alignedProps, { aligned: true });
	const { $root: $labelRoot } = compose(createLabel(merged));

	return exposeAPI(expose, '$root', {
		$root: $labelRoot,
	});
};
