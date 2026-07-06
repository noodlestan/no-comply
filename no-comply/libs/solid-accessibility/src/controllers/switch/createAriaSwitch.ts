import { combineProps, computedProps } from '@no-comply/solid-primitives';
import { splitProps } from 'solid-js';

import type { SwitchTagName } from '../../tag';
import { createAriaPressable } from '../pressable';

import type { AriaSwitchAPI, AriaSwitchProps } from './types';

export const createAriaSwitch = (props: AriaSwitchProps): AriaSwitchAPI => {
	const type = (tag: SwitchTagName = 'button'): 'button' | 'checkbox' | undefined => {
		if (tag === 'input') {
			return 'checkbox';
		}
		return tag === 'button' ? 'button' : undefined;
	};

	const [, ariaPressableProps] = splitProps(props, ['tag']);
	const { $root: $pressableRoot } = createAriaPressable(ariaPressableProps, 'switch');

	const $root = computedProps({
		component: () => props.tag,
		type: () => type(props.tag),
		'aria-checked': () => Boolean(props.checked),
	});

	return {
		$root: combineProps($pressableRoot, $root),
	};
};
