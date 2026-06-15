import ts from 'typescript';

import { TARGET_PLACEHOLDER_NAME } from '../constants';

export function createTSXViewTargetPlaceholder(
	propsBindingName = 'props',
): ts.JsxSelfClosingElement {
	return ts.factory.createJsxSelfClosingElement(
		ts.factory.createIdentifier(TARGET_PLACEHOLDER_NAME),
		undefined,
		ts.factory.createJsxAttributes([
			ts.factory.createJsxSpreadAttribute(ts.factory.createIdentifier(propsBindingName)),
		]),
	);
}
