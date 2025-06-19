import ts from 'typescript';

import type { FunctionTypeNode } from '../../types';

import { extractFunctionTypeParams } from './extractFunctionTypeParams';
import { extractFunctionTypeReturns } from './extractFunctionTypeReturns';
import { extractNodeGenerics } from './extractNodeGenerics';

export function extractFunctionTypeNode(node: ts.FunctionTypeNode): FunctionTypeNode {
	const generic = extractNodeGenerics(node);
	const params = extractFunctionTypeParams(node.parameters);
	const returns = extractFunctionTypeReturns(node.type);

	return {
		kind: 'function',
		generic,
		params,
		returns,
	};
}
