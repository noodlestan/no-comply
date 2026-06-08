import type { ObjectLiteralTypeNode } from '@purrception/lang-ts';

import type { ComponentEntityData } from '../types';

export function resolveComponentProps(component: ComponentEntityData): ObjectLiteralTypeNode {
	// if ('Props' in component.types) {
	// 	// eslint-disable-next-line dot-notation
	// 	return (component.types['Props'] as TypeExpressionDeclaration).node as ObjectLiteralTypeNode;
	// }
	return component.component.props as ObjectLiteralTypeNode;
}
