import type ts from 'typescript';

export type TypescriptElementNode = ts.JsxElement | ts.JsxSelfClosingElement | ts.JsxFragment;

export type TypescriptFunctionNode = ts.FunctionExpression | ts.ArrowFunction;

export type TypescriptExpressionNode = ts.Expression;

export type TypescriptNode =
	| TypescriptElementNode
	| TypescriptFunctionNode
	| TypescriptExpressionNode;
