import type { ObjectLiteralTypeNode } from '@purrception/lang-ts';

import type { ComponentEntityData } from '../types';

import { resolveComponentDeclaration } from './resolveComponentDeclaration';

export function resolveComponentProps(entity: ComponentEntityData): ObjectLiteralTypeNode {
	const component = resolveComponentDeclaration(entity);
	return component.props as ObjectLiteralTypeNode;
}
