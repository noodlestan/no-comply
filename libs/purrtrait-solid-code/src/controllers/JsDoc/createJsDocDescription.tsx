import type { JsDocData } from '@purrception/lang-ts';
import { type Accessor, createMemo } from 'solid-js';

import { resolveName, resolveNameAndAlias } from './private';
import type { JsDocDescriptionAPI, JsDocDescriptionOptions, LinkItem } from './types';

/**
 * Creates a reactive description API from a JsDoc AST node.
 *
 * Parses `@link` tags and inline `{@link …}` placeholders, resolving them
 * through the provided (or built-in) `resolveLink*` functions.
 *
 * All three accessors — `links`, `tags`, `description` — are memoised.
 */
export const createJsDocDescription = (
	node: Accessor<JsDocData>,
	options: JsDocDescriptionOptions = {},
): JsDocDescriptionAPI => {
	const resolveLinkName = (displayName: string, alias?: string): string => {
		return options.resolveLinkName
			? options.resolveLinkName(displayName, alias)
			: resolveName(displayName, alias);
	};

	const resolveLinkHref = (
		text: string,
	): string | [displayName: string, href: string] | undefined => {
		return options.resolveLink ? options.resolveLink(text) : text;
	};

	const serializeLink = (text: string, href: string): string | undefined => {
		return options.serializeLink ? options.serializeLink?.(text, href) : `[${text}](${href})`;
	};

	const links = () => {
		// eslint-disable-next-line dot-notation
		const link = node().tags?.['link'];
		if (!link) {
			return [];
		}

		const items = typeof link === 'string' ? [link] : link;
		const result: LinkItem[] = [];

		for (const item of items) {
			const [text, alias] = resolveNameAndAlias(item);
			const hrefResult = resolveLinkHref(text);
			if (hrefResult === undefined) {
				continue;
			}

			const [displayName, href] = Array.isArray(hrefResult)
				? [alias ?? hrefResult[0], hrefResult[1]]
				: [resolveLinkName(text, alias), hrefResult];

			result.push({ text: displayName, href });
		}

		return result;
	};

	const tags = () => {
		return Object.entries(node().tags || {}).filter(([key]) => key !== 'link');
	};

	const description = () => {
		const desc = node().description;
		if (!desc) {
			return undefined;
		}

		const parts: string[] = [];
		let offset = 0;

		for (const match of desc.matchAll(/\{@link\s+([^}]+)\}/g)) {
			const [full, rawTarget] = match;
			const index = match.index ?? 0;
			parts.push(desc.slice(offset, index));

			if (rawTarget) {
				const [text, alias] = resolveNameAndAlias(rawTarget);
				const hrefResult = resolveLinkHref(text);
				if (hrefResult === undefined) {
					parts.push(alias ?? text);
				} else {
					const [displayName, href] = Array.isArray(hrefResult)
						? [hrefResult[0], alias ?? hrefResult[1]]
						: [hrefResult, resolveLinkName(text, alias)];

					const expression = serializeLink(displayName, href);
					parts.push(expression ?? displayName);
				}
			}

			offset = index + full.length;
		}

		parts.push(desc.slice(offset));
		return parts.join('');
	};

	const linksMemo = createMemo(links);
	const linksTags = createMemo(tags);
	const linksDescription = createMemo(description);

	return {
		links: linksMemo,
		tags: linksTags,
		description: linksDescription,
	};
};
