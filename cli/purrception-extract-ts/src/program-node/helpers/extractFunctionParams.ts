import type ts from 'typescript';

import { type FunctionJsDocData, extractDeclarationJsDoc } from '../../jsdoc';
import type { ParamData } from '../../types';

import { extractTypeExpression } from './extractTypeExpression';

export function extractFunctionParams(
	params: readonly ts.ParameterDeclaration[],
	functionJsDoc?: FunctionJsDocData,
): ParamData[] {
	return params.map(param => {
		const name = param.name.getText();
		const { description, tags } = extractDeclarationJsDoc(param);

		const type = param.type ? extractTypeExpression(param.type) : 'unknown';
		const optional = Boolean(param.questionToken);

		return {
			name,
			type,
			optional,
			description: description || functionJsDoc?.paramTags?.[name],
			tags,
		};
	});
}
