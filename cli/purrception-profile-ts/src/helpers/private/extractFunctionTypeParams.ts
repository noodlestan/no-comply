import type ts from 'typescript';

import type { ParamData } from '../../types';

import { extractTypeRefOrExpression } from './extractTypeRefOrExpression';

export function extractFunctionTypeParams(params: readonly ts.ParameterDeclaration[]): ParamData[] {
	return params.map(param => {
		const name = param.name.getText();
		const type = param.type ? extractTypeRefOrExpression(param.type) : 'any';
		const optional = Boolean(param.questionToken);

		return {
			name,
			type,
			optional,
		};
	});
}
