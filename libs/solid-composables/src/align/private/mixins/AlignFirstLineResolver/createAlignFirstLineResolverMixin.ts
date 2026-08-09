import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { combineProps, computedProps, staticClassList } from '@no-comply/solid-primitives';

import { useAlignFirstLineOwnerAPI } from '../../providers';

import styles from './AlignFirstLineResolverMixin.module.scss';
import { $ALIGN_FIRST_LINE_RESOLVER_MIXIN } from './constants';
import type { AlignFirstLineResolverMixinAPI } from './types';

export const createAlignFirstLineMixin = (): AlignFirstLineResolverMixinAPI => {
	const [, expose] = createExposable($ALIGN_FIRST_LINE_RESOLVER_MIXIN);

	const context = useAlignFirstLineOwnerAPI();

	const $contextRoot = computedProps({
		classList: context.proxyClassList,
	});

	const $root = {
		classList: staticClassList(styles, 'AlignFirstLineResolver'),
	};

	return exposeAPI(expose, '$root', {
		$root: combineProps($root, $contextRoot),
	});
};
