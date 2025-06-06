import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { type PickRequired, combineProps, computedProps } from '@no-comply/solid-primitives';

import { createTextMixin } from '../../mixins';

import { $TEXT } from './constants';
import type { TextAPI, TextProps } from './types';

const defaultProps: PickRequired<TextProps, 'tag'> = {
	tag: 'p',
};

export const createText = (props: TextProps): TextAPI => {
	const [locals, expose, compose] = createExposable($TEXT, props);

	const { $root: $textMixinRoot } = compose(createTextMixin(locals));

	const component = () => locals.tag ?? defaultProps.tag;
	const $root = computedProps({
		component,
	});

	return exposeAPI(expose, '$root', {
		$root: combineProps($textMixinRoot, $root),
	});
};
