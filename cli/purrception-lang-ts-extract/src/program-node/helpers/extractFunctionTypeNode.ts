import type { FunctionTypeNode } from '@purrception/lang-ts';
import ts from 'typescript';

import { extractFunctionJsDoc } from '../../jsdoc';

import { extractFunctionParams } from './extractFunctionParams';
import { extractFunctionReturns } from './extractFunctionReturns';
import { extractNodeGenerics } from './extractNodeGenerics';

export function extractFunctionTypeNode(node: ts.FunctionTypeNode): FunctionTypeNode {
	const jsDoc = extractFunctionJsDoc(node);
	const { description, tags } = jsDoc;

	const generic = extractNodeGenerics(node);
	const params = extractFunctionParams(node.parameters, jsDoc);
	const returns = extractFunctionReturns(node.type, jsDoc);

	return {
		kind: 'function',
		generic,
		params,
		returns,
		description,
		tags,
	};
}
