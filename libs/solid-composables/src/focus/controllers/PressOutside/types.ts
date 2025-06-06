import type { PressEventHandlers } from '@no-comply/solid-primitives';
import type { Accessor } from 'solid-js';

export type PressOutsideProps = {
	exclude?: Accessor<HTMLElement[]>;
	onPressOutside: NonNullable<PressEventHandlers['onPress']>;
};

export type PressOutsideAPI = {
	$root: {
		ref: (el: HTMLElement) => void;
	};
};
