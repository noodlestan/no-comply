import type { Accessor } from 'solid-js';

import type { MediaQueryCriteria } from '../../types';

export type MediaQueryProps = {
	query: MediaQueryCriteria | MediaQueryCriteria[];
};

export type MediaQueryAPI = {
	isMatch: Accessor<boolean>;
};
