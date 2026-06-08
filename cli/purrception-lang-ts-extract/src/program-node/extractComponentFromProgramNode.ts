import { type ComponentDeclaration } from '@purrception/lang-ts';
import ts from 'typescript';

import { extractFunctionJsDoc } from '../jsdoc';
import type { ProgramFileAPI } from '../program';

import {
	extractArrowFunctionType,
	extractComponentProps,
	extractExportedName,
	extractFunctionReturns,
	extractNodeGenerics,
	getArrowFunctionDeclarationNode,
	isComponentType,
	isExportedDeclaration,
	isJSXReturnType,
	isParentComponentType,
} from './helpers';

export function extractComponentFromProgramNode(
	programFile: ProgramFileAPI,
	node: ts.FunctionDeclaration | ts.ArrowFunction,
): ComponentDeclaration | undefined {
	const exportMap = programFile.exportsMap();

	const name = extractExportedName(node, exportMap);
	if (name === 'anonymous') {
		return;
	}

	const declarationNode = getArrowFunctionDeclarationNode(node);
	const jsDoc = extractFunctionJsDoc(declarationNode);
	const { description, templateTags, tags } = jsDoc;

	const generic = extractNodeGenerics(node);
	const returns = extractFunctionReturns(node.type, jsDoc);

	const type = extractArrowFunctionType(node);
	const isComponent = type && isComponentType(type);
	const isParentComponent = type && isParentComponentType(type);
	const returnsJSX = isJSXReturnType(returns);

	if (!returnsJSX && !isComponent && !isParentComponent) {
		return;
	}

	const props = extractComponentProps(node, type || undefined);

	return {
		at: programFile.filepath,
		name,
		kind: 'component',
		private: !isExportedDeclaration(declarationNode),
		generic,
		props,
		description,
		templateTags,
		tags,
	};
}
