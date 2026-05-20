import { type ComponentDeclaration, normalizeTypeRefObject } from '@purrception/types-ts';
import ts from 'typescript';

import { extractFunctionJsDoc } from '../jsdoc';
import type { ProgramFileAPI } from '../program';

import {
	extractArrowFunctionType,
	extractComponentProps,
	extractExportedName,
	extractFunctionReturns,
	extractNodeGenerics,
	isComponentType,
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

	const jsDoc = extractFunctionJsDoc(node);
	const { description, templateTags, tags } = jsDoc;

	const generic = extractNodeGenerics(node);
	const returns = extractFunctionReturns(node.type, jsDoc);

	const rawType = extractArrowFunctionType(node);
	const type = rawType && normalizeTypeRefObject(rawType);

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
		generic,
		props,
		description,
		templateTags,
		tags,
	};
}
