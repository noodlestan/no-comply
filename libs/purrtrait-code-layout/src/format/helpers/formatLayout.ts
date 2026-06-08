import type { CodeLayoutLine, CodeLayoutNode, CodeLayoutToken } from '../../types';

function getLength(tokens: CodeLayoutToken[]): number {
	return tokens.reduce((acc, t) => {
		return acc + t.value.length;
	}, 0);
}

function trimSpaces(tokens: CodeLayoutToken[]): CodeLayoutToken[] {
	let start = 0;
	while (start < tokens.length && tokens[start]?.kind === 'space') {
		start++;
	}

	let end = tokens.length;
	while (end > start && tokens[end - 1]?.kind === 'space') {
		end--;
	}

	return tokens.slice(start, end);
}

function finalizeLine(indent: number, tokens: CodeLayoutToken[]): CodeLayoutLine | undefined {
	const trimmed = trimSpaces(tokens);
	if (trimmed.length === 0) {
		return undefined;
	}
	return { indent, content: trimmed };
}

// Try to inline all tokens from a node list
function tryInline(nodes: CodeLayoutNode[], cols: number): CodeLayoutToken[] | null {
	const result: CodeLayoutToken[] = [];

	for (const node of nodes) {
		if (node.type === 'token') {
			result.push(node);
		} else if (node.type === 'group') {
			const inner = tryInline(node.content, cols);
			if (!inner) return null;
			result.push(...inner);
		} else if (node.type === 'block') {
			for (const group of node.content) {
				const inner = tryInline(group.content, cols);
				if (!inner) return null;
				result.push(...inner);
			}
		} else {
			return null;
		}
	}

	return getLength(result) > cols ? null : result;
}

function formatNodes(nodes: CodeLayoutNode[], cols: number, indent: number): CodeLayoutLine[] {
	const lines: CodeLayoutLine[] = [];
	let current: CodeLayoutToken[] = [];

	for (const node of nodes) {
		if (node.type === 'token') {
			current.push(node);
			continue;
		}

		if (node.type === 'group') {
			const flat = tryInline(node.content, cols);
			const flatLen = flat ? getLength(flat) : Infinity;

			if (flat && getLength(current) + flatLen <= cols) {
				current.push(...flat);
				continue;
			}

			// flush if too long or not inline-able
			const flushed = finalizeLine(indent, current);
			if (flushed) {
				lines.push(flushed);
			}
			current = [];

			const groupLines = formatNodes(node.content, cols, indent + 1);
			lines.push(...groupLines);
			continue;
		}

		if (node.type === 'block') {
			const flat = tryInline(
				node.content.flatMap(g => g.content),
				cols,
			);
			const flatLen = flat ? getLength(flat) : Infinity;

			if (flat && getLength(current) + flatLen <= cols) {
				current.push(...flat);
				continue;
			}

			// flush before breaking
			const flushed = finalizeLine(indent, current);
			if (flushed) {
				lines.push(flushed);
			}
			current = [];

			for (const group of node.content) {
				const groupLines = formatNodes(group.content, cols, indent + 1);
				lines.push(...groupLines);
			}
			continue;
		}
	}

	const flushed = finalizeLine(indent, current);
	if (flushed) {
		lines.push(flushed);
	}

	return lines;
}

export const formatLayout = (nodes: CodeLayoutNode[], cols = 60, indent = 0): CodeLayoutLine[] =>
	formatNodes(nodes, cols, indent);
