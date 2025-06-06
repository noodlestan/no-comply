import { staticClassList } from '@no-comply/solid-primitives';

import styles from './TreeListItemDetailsMixin.module.scss';
import type { TreeListItemDetailsMixinAPI } from './types';

export const createTreeListItemDetailsMixin = (): TreeListItemDetailsMixinAPI => {
	const $root = {
		classList: staticClassList(styles, 'TreeListItemDetails'),
	};

	const $focusable = {
		classList: staticClassList(styles, '-focusable'),
	};

	const $toggle = {
		classList: staticClassList(styles, '-toggle'),
	};

	const $contents = {
		classList: staticClassList(styles, '-contents'),
	};

	return {
		$root,
		$focusable,
		$toggle,
		$contents,
	};
};
