import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import {
	type PickRequired,
	combineProps,
	computedProps,
	pickProps,
} from '@no-comply/solid-primitives';
import { type JSX, createSignal } from 'solid-js';

import {
	INPUT_BOX_MIXIN_PROPS,
	SIZED_INPUT_BOX_MIXIN_PROPS,
	createInputBoxMixin,
	createSizedInputBoxMixin,
} from '../../mixins';

import { $TEXT_INPUT } from './constants';
import { makeStyle } from './functions';
import type { TextInputAPI, TextInputProps } from './types';

const defaultProps: PickRequired<TextInputProps, 'length'> = {
	length: 'auto',
};

export const createTextInput = (props: TextInputProps): TextInputAPI => {
	const [locals, expose, compose] = createExposable($TEXT_INPUT, props);

	const length = () => locals.length ?? defaultProps.length;

	const [wasTouched, setWasTouched] = createSignal<boolean>(false);

	const onChange = (ev: Event, v: string) => {
		locals.onChange?.(ev);
		locals.onValueChange?.(v);
	};

	const handleInput: JSX.EventHandlerUnion<HTMLInputElement, InputEvent> = ev => {
		const target = ev.target as HTMLInputElement;
		const v = target?.value ?? '';
		onChange(ev, v);
	};

	const handleFocus = () => {
		setWasTouched(true);
	};

	const handleKeyDown = (ev: KeyboardEvent) => {
		ev.stopImmediatePropagation();
	};

	const handleKeyUp = (ev: KeyboardEvent) => {
		ev.stopImmediatePropagation();
	};

	const handleKeyPress = (ev: KeyboardEvent) => {
		ev.stopImmediatePropagation();
	};

	const handlers = {
		onInput: handleInput,
		onFocus: handleFocus,
		// onBlur: handleBlur,
		onKeyDown: handleKeyDown,
		onKeyUp: handleKeyUp,
		onKeyPress: handleKeyPress,
	};

	const $root = computedProps(handlers, {
		style: () => makeStyle(length(), locals.maxLength),
		value: () => locals.value,
	});

	const inputBoxMixinProps = combineProps(
		pickProps(locals, INPUT_BOX_MIXIN_PROPS),
		computedProps({
			touched: wasTouched,
		}),
	);
	const { $root: $inputBoxMixinRoot } = compose(createInputBoxMixin(inputBoxMixinProps));

	const sizedInputBoxMixinProps = pickProps(locals, SIZED_INPUT_BOX_MIXIN_PROPS);
	const { $root: $sizedInputBoxMixinRoot } = compose(
		createSizedInputBoxMixin(sizedInputBoxMixinProps),
	);

	return exposeAPI(expose, '$root', {
		$root: combineProps($inputBoxMixinRoot, $sizedInputBoxMixinRoot, $root),
	});
};
