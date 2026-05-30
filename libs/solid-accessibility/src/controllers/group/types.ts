import type { Accessor } from 'solid-js';

import type { AriaAttributes } from '../../attributes';
import type { AriaLabelledAPI, AriaLabelledProps } from '../label';
import type { AriaRegionAPI } from '../region';

export interface AriaGroupProps extends AriaLabelledProps {
	expanded?: boolean;
	setSize?: number;
}

export interface AriaGroupAPI {
	$root: Omit<AriaRegionAPI['$root'], 'role'> & {
		role: 'group' | undefined;
		'aria-expanded': AriaAttributes['aria-expanded'];
		'aria-setsize': AriaAttributes['aria-setsize'];
	};
	$label: AriaLabelledAPI['$label'];
	$description: AriaLabelledAPI['$description'];
	hasLabel: Accessor<boolean>;
}

// interface AriaGroupAPI {
// 	$literal: 1;
// 	$union: 'a' | 'b' | 'c';
// 	$intersection: { a: string } & { b: number };
// 	$array: string[];
// 	$tuple: [number, string, boolean];
// 	$namedTuple: [foo: number, bar?: string];
// 	$template: `foo-${string}-bar`;
// 	$operator: readonly string[];
// 	$mapped: { [K in keyof T]?: T[K] };
// 	$conditional: T extends string ? 'yes' : 'no';
// 	$infer: T extends infer U ? U : never;
// 	$omit: Omit<{ a: number; b: string }, 'b'>;
// 	$pick: Pick<{ a: number; b: string }, 'b'>;
// }
