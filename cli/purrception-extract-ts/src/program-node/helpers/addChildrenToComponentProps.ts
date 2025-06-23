import type { TypeExpressionData, TypeRef, TypeRefObject } from '../../types';

import { isParentComponentType } from './isParentComponentType';

export function addChildrenToComponentProps(
	componentType: TypeRefObject | undefined,
	props: TypeExpressionData | TypeRef | undefined,
): TypeExpressionData | TypeRef | undefined {
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
