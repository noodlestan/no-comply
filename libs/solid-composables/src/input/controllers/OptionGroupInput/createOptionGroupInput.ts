import { createAriaRadioGroup } from '@no-comply/solid-accessibility';
import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { combineProps } from '@no-comply/solid-primitives';

import { createOptionGroupContext } from '../../contexts';

import { $OPTION_GROUP_INPUT } from './constants';
import type { OptionGroupInputAPI, OptionGroupInputProps } from './types';

export const createOptionGroupInput = (props: OptionGroupInputProps): OptionGroupInputAPI => {
	const [locals, expose] = createExposable($OPTION_GROUP_INPUT, props);

	const contextValue = createOptionGroupContext(locals);
	const [context] = contextValue;

	const {
		$root: $ariaOptionGroupRoot,
		$label,
		$description,
		hasLabel,
	} = createAriaRadioGroup(locals);

	const $root = {};

	return exposeAPI(expose, '$root', {
		$root: combineProps($ariaOptionGroupRoot, $root),
		$label,
		$description,
		hasLabel,
		context,
		contextValue,
	});
};
