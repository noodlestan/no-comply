import type { ComponentData } from '@purrception/types-ts';
import ts from 'typescript';

import { extractFunctionJsDoc } from '../jsdoc';
import type { ProgramContext } from '../program';

import {
	extractArrowFunctionType,
	extractComponentProps,
	extractExportedName,
	extractFunctionReturns,
	extractNodeGenerics,
	isComponentType,
	isJSXReturnType,
	isParentComponentType,
	normalizeTypeRefObject,
} from './helpers';
export function extractComponentFromProgramNode(
	ctx: ProgramContext,
	node: ts.FunctionDeclaration | ts.ArrowFunction,
): ComponentData | undefined {
	const exportMap = ctx.exportsMap();

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
		kind: 'component',
		name,
		generic,
		props,
		description,
		templateTags,
		tags,
	};
}
