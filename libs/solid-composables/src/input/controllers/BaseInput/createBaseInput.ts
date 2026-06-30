import { createAriaInput } from '@no-comply/solid-accessibility';
import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import {
	attributeBoolean,
	combineProps,
	computedProps,
	shortId,
} from '@no-comply/solid-primitives';
import { createMemo } from 'solid-js';

import { $BASE_INPUT } from './constants';
import type { BaseInputAPI, BaseInputProps } from './types';

export const createBaseInput = (props: BaseInputProps): BaseInputAPI => {
	const [locals, expose] = createExposable($BASE_INPUT, props);

	const id = createMemo(() => locals.id || shortId());

	const { $root: $ariaInputRoot } = createAriaInput(props);

	const $root = computedProps({
		readonly: () => attributeBoolean(locals.disabled),
		id,
	});

	return exposeAPI(expose, '$root', {
		$root: combineProps($ariaInputRoot, $root),
		id,
	});
};
