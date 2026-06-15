import type ts from 'typescript';

export type XTractableJSXNode = ts.JsxElement | ts.JsxSelfClosingElement | ts.JsxFragment;
export type XTractableFunctionNode = ts.FunctionExpression | ts.ArrowFunction;

export type XTractableNode = XTractableJSXNode | XTractableFunctionNode | ts.Expression;
