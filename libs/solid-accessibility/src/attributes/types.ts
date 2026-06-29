import type { JSX } from 'solid-js';

export type AriaAttributes = JSX.AriaAttributes;

/** the source attribute is
 * "aria-checked"?: boolean | "false" | "mixed" | "true" | undefined;
 */
export type AriaAttributeOrientation = 'vertical' | 'horizontal';

export type AriaAttributeLive = 'off' | 'assertive' | 'polite';

export type AriaAttributeRelevantNotification = 'additions' | 'removals' | 'text' | 'all';

export type AriaAttributeRelevant =
	| 'additions'
	| 'additions removals'
	| 'additions text'
	| 'all'
	| 'removals'
	| 'removals additions'
	| 'removals text'
	| 'text'
	| 'text additions'
	| 'text removals';
