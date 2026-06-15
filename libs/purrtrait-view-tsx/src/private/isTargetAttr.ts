import ts from 'typescript';

import { TARGET_ATTRIBUTE_NAME } from '../constants';

export function isTargetAttr(attr: ts.JsxAttribute): boolean {
	return ts.isIdentifier(attr.name) && attr.name.text === TARGET_ATTRIBUTE_NAME;
}
