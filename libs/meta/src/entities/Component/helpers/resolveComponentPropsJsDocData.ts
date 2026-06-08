import { type JsDocData, type TypeDeclaration, getFirstTagValue } from '@purrception/lang-ts';

import type { ComponentEntityData } from '../types';

import { resolveComponentDeclaration } from './resolveComponentDeclaration';

export function resolveComponentPropsJsDocData(entity: ComponentEntityData): JsDocData | undefined {
	const component = resolveComponentDeclaration(entity);
	const propsSymbolName = getFirstTagValue(component.tags, 'props') || 'Props';

	return entity.symbols.declared[propsSymbolName] as TypeDeclaration;
}
