import type { TypeExpressionNode, TypeRef, TypeRefObject } from '@purrception/lang-ts';

import { isParentComponentType } from './isParentComponentType';

export function addChildrenToComponentProps(
	componentType: TypeRefObject | undefined,
	props: TypeExpressionNode | TypeRef | undefined,
): TypeExpressionNode | TypeRef | undefined {
	if (!props) {
		return undefined;
	}

	if (!isParentComponentType(componentType)) {
		return props;
	}

	return {
		kind: 'intersection',
		entries: [
			props,
			{
				kind: 'object',
				members: {
					children: {
						type: 'JSX.Element',
						optional: false,
					},
				},
			},
		],
	};
}
