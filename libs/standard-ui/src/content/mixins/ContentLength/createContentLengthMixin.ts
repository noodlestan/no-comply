import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { type PickRequired, computedProps, createClassList } from '@no-comply/solid-primitives';

import styles from './ContentLengthMixin.module.scss';
import { $CONTENT_LENGTH_MIXIN } from './constants';
import { makeStyle } from './private';
import type { ContentLengthMixinAPI, ContentLengthMixinProps } from './types';

const defaultProps: PickRequired<ContentLengthMixinProps, 'length'> = {
	length: 'medium',
};

export const createContentLengthMixin = (props: ContentLengthMixinProps): ContentLengthMixinAPI => {
	const [locals, expose] = createExposable($CONTENT_LENGTH_MIXIN, props);

	const length = () => locals.length ?? defaultProps.length;
	const classList = createClassList(styles, () => ['ContentLength']);

	const $root = computedProps({
		classList,
		style: () => makeStyle(length()),
	});

	return exposeAPI(expose, '$root', {
		$root,
		length,
	});
};
