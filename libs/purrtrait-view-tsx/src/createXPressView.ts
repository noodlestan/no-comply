import { type XPressValueJsx, extractProps, parseSource, printNode } from '@purrtrait/client-tsx';
import type ts from 'typescript';

import {
	extractComponentName,
	findTargetNode,
	isTargetAttr,
	replaceTarget,
	wrapSourceInFragment,
} from './private';
import type { XPressViewExtracted } from './types';

export function createXPressView(source: string): XPressViewExtracted {
	const code = wrapSourceInFragment(source);
	const sourceFile = parseSource(code);
	const targetNode = findTargetNode(sourceFile);

	if (!targetNode) {
		throw new Error('No target node found');
	}

	const raw: XPressValueJsx = {
		type: 'jsx',
		ast: targetNode,
		serialized: printNode(sourceFile, targetNode),
	};

	const wrapperAst = replaceTarget(sourceFile, targetNode);
	const wrapper: XPressValueJsx = {
		type: 'jsx',
		ast: wrapperAst as ts.JsxElement | ts.JsxSelfClosingElement | ts.JsxFragment,
		serialized: printNode(sourceFile, wrapperAst),
	};

	const componentName = extractComponentName(targetNode);
	const ignore = (attr: ts.JsxAttribute) => isTargetAttr(attr);
	const props = extractProps(targetNode, sourceFile, ignore);

	return {
		source,
		wrapper,
		target: {
			component: { name: componentName },
			raw,
		},
		props,
	};
}
