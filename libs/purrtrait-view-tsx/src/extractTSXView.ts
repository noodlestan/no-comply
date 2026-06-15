import { type TSXElementNode, extractProps, parseSource, printNode } from '@purrtrait/client-tsx';
import type ts from 'typescript';

import {
	extractComponentName,
	findTargetNode,
	isTargetAttr,
	replaceTarget,
	wrapSourceInFragment,
} from './private';
import type { TSXView } from './types';

export function extractTSXView(source: string): TSXView {
	const code = wrapSourceInFragment(source);
	const sourceFile = parseSource(code);
	const targetNode = findTargetNode(sourceFile);

	if (!targetNode) {
		throw new Error('No target node found');
	}

	const raw: TSXElementNode = {
		type: 'jsx',
		tsNode: targetNode,
		serialized: printNode(sourceFile, targetNode),
	};

	const wrapperAst = replaceTarget(sourceFile, targetNode);
	const wrapper: TSXElementNode = {
		type: 'jsx',
		tsNode: wrapperAst as ts.JsxElement | ts.JsxSelfClosingElement | ts.JsxFragment,
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
