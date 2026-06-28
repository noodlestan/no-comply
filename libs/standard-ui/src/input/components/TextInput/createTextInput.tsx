import { createTextInputValue } from '@no-comply/solid-composables';
import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { combineProps, computedProps, pickProps } from '@no-comply/solid-primitives';

import { createContentLengthMixin } from '../../../content';
import {
	SIZED_INPUT_BOX_MIXIN_PROPS,
	createInputBoxMixin,
	createSizedInputBoxMixin,
} from '../../mixins';

import { $TEXT_INPUT } from './constants';
import { INPUT_BOX_MIXIN_PROPS_RELAYED } from './private';
import type { TextInputAPI, TextInputProps } from './types';

export const createTextInput = (props: TextInputProps): TextInputAPI => {
	const [locals, expose, compose] = createExposable($TEXT_INPUT, props);

	const { $root: $textInputValueRoot, value, wasTouched } = createTextInputValue(props);

	const inputBoxMixinProps = combineProps(
		pickProps(locals, INPUT_BOX_MIXIN_PROPS_RELAYED),
		computedProps({
			touched: () => props.touched ?? wasTouched(),
		}),
	);
	const { $root: $inputBoxMixinRoot } = compose(createInputBoxMixin(inputBoxMixinProps));

	const sizedInputBoxMixinProps = pickProps(locals, SIZED_INPUT_BOX_MIXIN_PROPS);
	const { $root: $sizedInputBoxMixinRoot, size } = compose(
		createSizedInputBoxMixin(sizedInputBoxMixinProps),
	);

	const contentLengthMixinProps = pickProps(locals, ['length']);
	const { $root: $contentLengthMixinRoot, length } = compose(
		createContentLengthMixin(contentLengthMixinProps),
	);

	return exposeAPI(expose, '$root', {
		$root: combineProps(
			$textInputValueRoot,
			$inputBoxMixinRoot,
			$sizedInputBoxMixinRoot,
			$contentLengthMixinRoot,
		),
		value,
		wasTouched,
		size,
		length,
	});
};
