import { computedProps } from '@no-comply/solid-primitives';

import type { AriaBusyAPI, AriaBusyProps } from './types';

export const createAriaBusy = (props: AriaBusyProps = {}): AriaBusyAPI => {
	const $root = computedProps({
		'aria-busy': () => Boolean(props.busy),
	});

	return {
		$root,
	};
};
