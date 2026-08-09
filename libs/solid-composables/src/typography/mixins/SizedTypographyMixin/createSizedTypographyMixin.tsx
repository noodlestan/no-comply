import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import {
	type ClassList,
	combineProps,
	computedProps,
	createClassList,
} from '@no-comply/solid-primitives';
import type { Accessor } from 'solid-js';

import { createAlignedToFirstLineMixin } from '../../../align';

import styles from './SizedTypographyMixin.module.scss';
import { $SIZED_TYPOGRAPHY_MIXIN } from './constants';
import type { SizedTypographyMixinAPI, SizedTypographyMixinProps } from './types';

export const createSizedTypographyMixin = (
	props: SizedTypographyMixinProps,
	consumerClassList: Accessor<ClassList>,
): SizedTypographyMixinAPI => {
	const [locals, expose, compose] = createExposable($SIZED_TYPOGRAPHY_MIXIN, props);

	const classList = createClassList(styles, 'SizedTypography');

	const mergedClassList = () => ({ ...classList(), ...consumerClassList() });

	// console.log('createSizedTypographyMixin', consumerClassList(), mergedClassList())

	const { $root: $alignedRoot } = compose(createAlignedToFirstLineMixin(locals, mergedClassList));

	const $root = computedProps({
		classList,
	});

	return exposeAPI(expose, '$root', {
		$root: combineProps($alignedRoot, $root),
	});
};
