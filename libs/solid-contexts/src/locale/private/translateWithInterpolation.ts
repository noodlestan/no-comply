/**
 * Copyright (c) 2021-2023 Martynas Barzda
 * Based on [solid-i18next](https://github.com/noodlestan/solid-i18next)
 * Licensed under the MIT License.
 */
import type { InitOptions, TFunction } from 'i18next';

import type { TranslateProps } from '../components';

import { hasInterpolation } from './hasInterpolation';

const isNode = !globalThis.window;

type ItemObject = {
	textContent: string;
	t: string;
};

export const translateWithInterpolation =
	(t: TFunction, options: InitOptions, props: TranslateProps) =>
	(item: string | object): string | object => {
		if (typeof item === 'string' && hasInterpolation(item, options.interpolation ?? {}))
			return t(item, props.options);

		if (typeof item === 'object') {
			const itemObject = item as ItemObject;
			const textContent = itemObject.textContent ?? itemObject.t;
			if (textContent && hasInterpolation(textContent, options.interpolation ?? {})) {
				itemObject[isNode ? 't' : 'textContent'] = t(textContent, props.options);
			}
		}

		return item;
	};
