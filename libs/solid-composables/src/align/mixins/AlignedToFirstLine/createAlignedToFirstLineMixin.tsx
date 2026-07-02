import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { type ClassList, computedProps, createClassList } from '@no-comply/solid-primitives';
import { type Accessor } from 'solid-js';

import { createAlignFirstLineRegistrationEffect } from '../../private';

import styles from './AlignedToFirstLineMixin.module.scss';
import { $ALIGNED_TO_FIRST_LINE_MIXIN } from './constants';
import type { AlignedToFirstLineMixinAPI, AlignedToFirstLineMixinProps } from './types';

export const createAlignedToFirstLineMixin = (
	props: AlignedToFirstLineMixinProps,
	consumerClassList: Accessor<ClassList>,
): AlignedToFirstLineMixinAPI => {
	const [locals, expose] = createExposable($ALIGNED_TO_FIRST_LINE_MIXIN, props);

	const classList = createClassList(styles, () => ({
		AlignedToFirstLine: Boolean(locals.alignFirstLine),
	}));
	const $root = computedProps({
		classList,
	});

	createAlignFirstLineRegistrationEffect(props, consumerClassList);

	return exposeAPI(expose, '$root', {
		$root,
	});
};
