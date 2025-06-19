import ts from 'typescript';

import type { FunctionJsDoc } from '../../jsdoc';
import type { ParamData } from '../../types';

import { extractTypeRefOrExpression } from './extractTypeRefOrExpression';

export function extractFunctionParams(
	node: ts.FunctionDeclaration | ts.ArrowFunction,
	jsDoc: FunctionJsDoc,
): ParamData[] {
	return node.parameters.map(param => {
		const name = param.name.getText();

		return {
			name,
			type: param.type ? extractTypeRefOrExpression(param.type) : 'any',
			description: jsDoc.paramTags.get(name),
			optional: Boolean(param.questionToken),
		};
	});
}
