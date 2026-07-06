import type { Styles } from '@no-comply/solid-primitives';

import type { ContentLengthProp } from '../types';

import { makeLength } from './makeLength';

export const makeStyle = (length?: ContentLengthProp): Styles =>
	length ? { '--__content-length': makeLength(length) } : {};
