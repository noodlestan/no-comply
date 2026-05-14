import type { CodeLayoutContextValue, CodeLayoutNode } from '@purrtrait/code-layout';

type LayoutItemFunction<T> = (ctx: CodeLayoutContextValue, item: T) => CodeLayoutNode[];
type LayoutSeparatorFunction = () => CodeLayoutNode[];

export function eachExpression<T>(
	ctx: CodeLayoutContextValue,
	items: T[] = [],
	layoutItem: LayoutItemFunction<T>,
	layoutSeparator?: LayoutSeparatorFunction,
): CodeLayoutNode[] {
	return Object.values(items).flatMap((item, i, arr) => [
		...layoutItem(ctx, item),
		...(i < arr.length - 1 && layoutSeparator ? layoutSeparator() : []),
	]);
}
