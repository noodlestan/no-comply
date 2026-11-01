import { createIcon as createHeadlessIcon, createIconMixin } from '@no-comply/solid-composables';
import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { combineProps, computedProps, createClassList } from '@no-comply/solid-primitives';
import { mergeProps } from 'solid-js';

import { createSizedContentMixin } from '../../../content';

import styles from './Icon.module.scss';
import { $ICON } from './constants';
import type { IconAPI, IconProps } from './types';

export const createIcon = (props: IconProps): IconAPI => {
	const [locals, expose, compose] = createExposable($ICON, props);

	const { $root: $iconRoot } = compose(createHeadlessIcon(locals));
	const { $root: $iconMixinRoot } = compose(createIconMixin());
	const { $root: $sizedContentMixinRoot } = compose(
		createSizedContentMixin(mergeProps(locals, { scale: 'down' as const })),
	);

	const $root = computedProps({
		classList: createClassList(styles, () => ['Icon']),
	});

	return exposeAPI(expose, '$root', {
		$root: combineProps($iconRoot, $iconMixinRoot, $sizedContentMixinRoot, $root),
	});
};
