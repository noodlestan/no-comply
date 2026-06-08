import { type TypeExpressionNode, type TypeRefNode, createTypeRefNode } from '@purrception/lang-ts';

import { isParentComponentType } from './isParentComponentType';

export function addChildrenToComponentProps(
	componentType: TypeRefNode | undefined,
	props: TypeExpressionNode | undefined,
): TypeExpressionNode | undefined {
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
						type: createTypeRefNode('JSX.Element'),
						optional: false,
					},
				},
			},
		],
	};
}
