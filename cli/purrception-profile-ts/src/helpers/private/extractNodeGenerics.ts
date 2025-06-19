import ts from 'typescript';

import type { TypeExpressionGeneric } from '../../types';

import { extractTypeRef } from './extractTypeRef';

export function extractNodeGenerics(node: ts.Node): TypeExpressionGeneric[] | undefined {
	if (!('typeParameters' in node)) return undefined;

	const typeParameters = (
		node as ts.SignatureDeclaration | ts.InterfaceDeclaration | ts.TypeAliasDeclaration
	).typeParameters;
	if (!typeParameters) return undefined;

	return typeParameters.map(param => ({
		name: param.name.getText(),
		constraint: param.constraint ? extractTypeRef(param.constraint) : 'any',
		default: param.default ? extractTypeRef(param.default) : undefined,
	}));
}
