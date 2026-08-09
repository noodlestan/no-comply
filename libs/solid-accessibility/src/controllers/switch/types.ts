import type { SwitchTagName } from '../../tag';
import type { AriaPressableProps, AriaPressableRootAPI } from '../pressable';

export type AriaSwitchProps = Omit<AriaPressableProps, 'tag' | 'type'> & {
	tag: SwitchTagName;
	checked: boolean;
};

export type AriaSwitchAPI = {
	$root: Omit<AriaPressableRootAPI, 'component' | 'type'> & {
		component: SwitchTagName;
		type: 'button' | 'checkbox' | undefined;
		'aria-checked': boolean;
	};
};
