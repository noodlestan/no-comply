import { computeLayout } from '../layout/compute';
import type { CodeLayoutContextValue } from '../layout/contexts';
import { formatLayout } from '../layout/format';
import type { CodeLayoutLine } from '../layout/types';

import type {
	CodeSerializerAPI,
	CodeSerializerLinkResolver,
	CodeSerializerOptions,
	CodeSerializerOutput,
} from './types';

const newLine = '\n';

function serializeLine(
	line: CodeLayoutLine,
	symbols: Map<string, string>,
	linkResolver: CodeSerializerLinkResolver,
): string {
	const indent = '  '.repeat(line.indent);
	const content = line.content
		.map(token => {
			const link = token.link ?? linkResolver(token.value);
			if (link) {
				symbols.set(token.value, link);
			}
			return token.value;
		})
		.join('');
	return indent + content;
}

export const createCodeSerializer = (options: CodeSerializerOptions = {}): CodeSerializerAPI => {
	const linkResolver: CodeSerializerLinkResolver = options.linkResolver ?? (() => undefined);

	const serialize = (
		ctx: CodeLayoutContextValue,
		lang: string,
		node: object,
	): CodeSerializerOutput => {
		const symbols = new Map<string, string>();

		const nodes = computeLayout(ctx, lang, node);
		const lines = formatLayout(nodes, ctx.columns);

		const code = lines.map(line => serializeLine(line, symbols, linkResolver)).join(newLine);

		return { code, symbols };
	};

	return { serialize };
};
