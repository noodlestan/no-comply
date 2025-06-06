import { createAriaList } from '@no-comply/solid-accessibility';
import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { combineProps, computedProps, withDefault } from '@no-comply/solid-primitives';

import { createListContext } from '../../contexts';
import { createListKeyboardController } from '../ListKeyboard';

import { $LIST } from './constants';
import type { ListAPI, ListProps } from './types';

export const createList = (props: ListProps): ListAPI => {
	const [locals, expose] = createExposable($LIST, props);

	const contextValue = createListContext(locals);
	const [context] = contextValue;
	const { components } = context;

	const keyboard = withDefault(
		() => locals.keyboard,
		() => createListKeyboardController(),
	);

	const { $root: $treeRoot, $label, $description } = createAriaList(locals);

	const _listItem = computedProps({
		component: () => components().item,
		setSize: () => locals.items.length,
	});

	return exposeAPI(expose, '$root', {
		$root: combineProps(() => keyboard().$root, $treeRoot),
		$label,
		$description,
		_listItem,
		context,
		contextValue,
	});
};
