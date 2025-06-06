import type { Accessor } from 'solid-js';

import type { MediaQueryCriteria } from '../../types';

export type ContainerQueryProps = {
	query: MediaQueryCriteria | MediaQueryCriteria[];
};

export type ContainerQueryAPI = {
	$root: {
		ref: (el: HTMLElement) => void;
	};
	isMatch: Accessor<boolean>;
};
