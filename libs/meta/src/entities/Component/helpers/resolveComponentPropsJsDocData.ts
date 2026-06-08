import { type JsDocData, getFirstTagValue } from '@purrception/lang-ts';

import type { ComponentEntityData } from '../types';

export function resolveComponentPropsJsDocData(
	component: ComponentEntityData,
): JsDocData | undefined {
	// eslint-disable-next-line dot-notation
	const type = getFirstTagValue(component.component.tags, 'props') || 'Props';
	return component.types[type];
}
