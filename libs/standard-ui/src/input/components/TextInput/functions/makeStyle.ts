import type { Styles } from '@no-comply/solid-primitives';

import type { TextInputLength } from '../types';

import { makeLength } from './makeLength';

export const makeStyle = (length?: TextInputLength | number, maxLength?: number): Styles =>
	length ? { '--input-length': makeLength(length, maxLength) } : {};
