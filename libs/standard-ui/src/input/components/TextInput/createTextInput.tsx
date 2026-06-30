import { createBaseInput, createTextInputValue } from '@no-comply/solid-composables';
import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { combineProps, pickProps } from '@no-comply/solid-primitives';

import { createContentLengthMixin } from '../../../content';
import {
	INPUT_STATE_MIXIN_PROPS,
	SIZED_INPUT_BOX_MIXIN_PROPS,
	createInputBoxMixin,
	createInputStateMixin,
	createSizedInputBoxMixin,
} from '../../mixins';

import { $TEXT_INPUT } from './constants';
import type { TextInputAPI, TextInputProps } from './types';

export const createTextInput = (props: TextInputProps): TextInputAPI => {
	const [locals, expose, compose] = createExposable($TEXT_INPUT, props);

	const { $root: $baseInputRoot, id } = compose(createBaseInput(props));

	const { $root: $textInputValueRoot, value, wasTouched } = compose(createTextInputValue(props));

	const inputBoxMixinProps = pickProps(locals, ['disabled']);
	const { $root: $inputBoxMixinRoot } = compose(createInputBoxMixin(inputBoxMixinProps));

	const inputStateMixinProps = pickProps(locals, INPUT_STATE_MIXIN_PROPS);
	const { $root: $inputStateMixinRoot } = compose(createInputStateMixin(inputStateMixinProps));

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
			$baseInputRoot,
			$textInputValueRoot,
			$inputBoxMixinRoot,
			$inputStateMixinRoot,
			$sizedInputBoxMixinRoot,
			$contentLengthMixinRoot,
		),
		value,
		wasTouched,
		size,
		length,
		id,
	});
};
