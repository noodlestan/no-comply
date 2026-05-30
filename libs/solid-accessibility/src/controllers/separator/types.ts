import type { AriaAttributes } from '../../attributes';
import type { SeparatorTagName } from '../../tag';

export type SeparatorOrientation = 'button' | 'submit' | 'reset';

export interface AriaSeparatorProps {
	tag?: SeparatorTagName;
	orientation?: AriaAttributes['aria-orientation'];
}

export interface AriaSeparatorAPI {
	$root: {
		component: SeparatorTagName;
		role: 'separator' | undefined;
		'aria-orientation': AriaAttributes['aria-orientation'];
	};
}
