import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { combineProps, computedProps, createClassList } from '@no-comply/solid-primitives';

import { createLinkMixin } from '../Link';

import styles from './SkipLinkMixin.module.scss';
import { $SKIP_LINK_MIXIN } from './constants';
import type { SkipLinkMixinAPI, SkipLinkMixinProps } from './types';

export const createSkipLinkMixin = (props: SkipLinkMixinProps = {}): SkipLinkMixinAPI => {
	const [locals, expose, compose] = createExposable($SKIP_LINK_MIXIN, props);

	const { $root: $linkMixinRoot } = compose(createLinkMixin({ inset: true }));

	const classList = createClassList(styles, () => ({
		SkipLink: true,
		floating: Boolean(locals.floating),
	}));

	const $root = computedProps({
		classList,
	});

	return exposeAPI(expose, '$root', {
		$root: combineProps($linkMixinRoot, $root),
	});
};
