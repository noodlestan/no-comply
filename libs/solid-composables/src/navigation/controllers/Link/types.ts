import type {
	AttributeBoolean,
	AttributeNumber,
	AttributeString,
	PressEventHandlers,
} from '@no-comply/solid-primitives';

import type { PressableAPI, PressableProps } from '../../../action';

export type LinkProps = PressableProps &
	PressEventHandlers & {
		href: string;
		target?: '_self' | '_blank' | '_parent' | '_top';
		rel?: string;
	};

export type LinkAPI = {
	$root: PressableAPI['$root'] & {
		href: AttributeString;
		target: AttributeString;
		rel: AttributeString;
		tabIndex: AttributeNumber;
		'data-external': AttributeBoolean;
		onClick: (ev: MouseEvent) => void;
	};
};
