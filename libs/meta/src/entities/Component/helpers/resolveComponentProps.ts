import type { ObjectLiteralTypeNode } from '@purrception/lang-ts';

import type { ComponentEntityData } from '../types.js';

import { resolveComponentDeclaration } from './resolveComponentDeclaration.js';

export function resolveComponentProps(entity: ComponentEntityData): ObjectLiteralTypeNode {
	const component = resolveComponentDeclaration(entity);
	return component.node.props as ObjectLiteralTypeNode;
}
