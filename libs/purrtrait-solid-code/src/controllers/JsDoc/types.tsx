/**
 * A resolved link entry with a display name and target href.
 * */
export type LinkItem = {
	text: string;
	href: string;
};

/**
 * A JSDoc tag entry: `[tagName, valueOrValues]`.
 * */
export type TagItem = [string, string | string[]];

/**
 * Options to customise link resolution inside {@link createJsDocDescription}.
 *
 * When an option is omitted the factory uses a reasonable built-in.
 */
export type JsDocDescriptionOptions = {
	/**
	 * Derive a display name from a link identifier and and optional alias.
	 */
	resolveLinkName?: (text: string, displayName?: string) => string;
	/**
	 * Resolve a link identifier to a href (or `[displayName, href]`).
	 *
	 * Return `undefined` to suppress the link entirely.
	 */
	resolveLink?: (href: string) => string | [displayName: string, href: string] | undefined;
	/**
	 * Format a resolved link as a markdown-like expression.
	 *
	 * Receives the final display name and href. Return `undefined` to render
	 * the name as plain text instead.
	 *
	 * @default `[${text}](${href})`
	 */
	serializeLink?: (text: string, href: string) => string | undefined;
};

export type JsDocDescriptionAPI = {
	/**
	 * Tag-level links (from `@link`).
	 * */
	links: () => LinkItem[];
	/**
	 * All tags except `@link`.
	 * */
	tags: () => TagItem[];
	/**
	 *  Description text with `{@link …}` placeholders resolved to markdown syntax
	 * */
	description: () => string | undefined;
};
