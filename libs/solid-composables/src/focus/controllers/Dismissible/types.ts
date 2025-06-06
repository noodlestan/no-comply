import type { PressOutsideAPI, PressOutsideProps } from '../PressOutside';

export type DismissibleProps = Pick<PressOutsideProps, 'exclude'> & {
	onDismiss: () => void;
};

export type DismissibleAPI = {
	$root: PressOutsideAPI['$root'] & {
		ref: (el: HTMLElement) => void;
		onKeyDown: (ev: KeyboardEvent) => void;
	};
};
