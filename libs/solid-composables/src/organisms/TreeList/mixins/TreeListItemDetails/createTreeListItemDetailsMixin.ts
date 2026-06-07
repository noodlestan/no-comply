import { staticClassList } from '@no-comply/solid-primitives';

import styles from './TreeListItemDetailsMixin.module.scss';
import type { TreeListItemDetailsMixinAPI } from './types';

export const createTreeListItemDetailsMixin = (): TreeListItemDetailsMixinAPI => {
	const $root = {
		classList: staticClassList(styles, 'TreeListItemDetails'),
	};

	const $focusable = {
		classList: staticClassList(styles, '-Focusable'),
	};

	const $toggle = {
		classList: staticClassList(styles, '-Toggle'),
	};

	const $contents = {
		classList: staticClassList(styles, '-Contents'),
	};

	return {
		$root,
		$focusable,
		$toggle,
		$contents,
	};
};
