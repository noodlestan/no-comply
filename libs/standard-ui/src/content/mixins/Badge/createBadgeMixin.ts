import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { combineProps, computedProps, createClassList } from '@no-comply/solid-primitives';
import { mergeProps } from 'solid-js';

import { createComposeColorsMixin, createContentPaletteMixin } from '../../../color';
import { createTextMixin } from '../../../typography';
import { createSizedContentMixin } from '../SizedContent';

import styles from './BadgeMixin.module.scss';
import { $BADGE_MIXIN } from './constants';
import type { BadgeMixinAPI, BadgeMixinProps } from './types';

export const createBadgeMixin = (props: BadgeMixinProps): BadgeMixinAPI => {
	const [locals, expose, compose] = createExposable($BADGE_MIXIN, props);

	const { $root: $sizedContentRoot, size } = compose(
		createSizedContentMixin(mergeProps(locals, { scale: 'down' as const })),
	);
	const { $root: $contentPaletteRoot, palette } = compose(
		createContentPaletteMixin({
			get palette() {
				return locals.color;
			},
		}),
	);
	const { $root: $composeColorsRoot } = compose(
		createComposeColorsMixin({ fg: true, bg: true, border: true }),
	);
	const { $root: $textRoot } = compose(
		createTextMixin({
			get size() {
				return locals.size;
			},
		}),
	);

	const $root = computedProps({
		classList: createClassList(styles, () => ['Badge']),
	});

	return exposeAPI(expose, '$root', {
		$root: combineProps(
			$sizedContentRoot,
			$contentPaletteRoot,
			$composeColorsRoot,
			$textRoot,
			$root,
		),
		size,
		palette,
	});
};
