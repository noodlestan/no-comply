import type { IconComponent } from '@no-comply/solid-primitives';
import type { JSX } from 'solid-js';

export type IconProps = {
	icon: IconComponent;
};

export type IconAPI = {
	$root: {
		component: 'span';
		children: JSX.Element;
	};
};
