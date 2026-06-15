import type ts from 'typescript';

import type { XTractableFunctionNode, XTractableJSXNode, XTractableNode } from '../ast';

export type XPressValueType = 'jsx' | 'handler' | 'expression';

export type XPressBaseValue<T extends XPressValueType, N extends XTractableNode> = {
	type: T;
	ast: N;
	serialized: string;
};

export type XPressValueJsx = XPressBaseValue<'jsx', XTractableJSXNode>;

export type XPressValueHandler = XPressBaseValue<'handler', XTractableFunctionNode>;

export type XPressValueExpression = XPressBaseValue<'expression', ts.Expression>;

export type XPressValue = XPressValueJsx | XPressValueHandler | XPressValueExpression;
