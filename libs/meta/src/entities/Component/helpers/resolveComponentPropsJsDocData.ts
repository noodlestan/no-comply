import { type JsDocData, getFirstTagValue } from '@purrception/lang-ts';

import type { ComponentEntityData } from '../types.js';

import { resolveComponentDeclaration } from './resolveComponentDeclaration.js';

export function resolveComponentPropsJsDocData(entity: ComponentEntityData): JsDocData | undefined {
	const component = resolveComponentDeclaration(entity);
	const propsSymbolName = getFirstTagValue(component.node.tags, 'props') || 'Props';

	return entity.symbols.declared[propsSymbolName] as JsDocData | undefined;
}
