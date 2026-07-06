import { onCleanup } from 'solid-js';

import {
	type FocusContextOptions,
	type FocusContextValue,
	createFocusContextPrivate,
} from '../../private';
import { useFocusContextMaybe } from '../../private';

export const createFocusContext = (options: FocusContextOptions = {}): FocusContextValue => {
	const [parent, parentOwnerAPI] = useFocusContextMaybe() || [];
	const [context, ownerAPI] = createFocusContextPrivate(options, parent);

	parentOwnerAPI?.addChild(context);

	onCleanup(() => parentOwnerAPI?.removeChild(context));

	return [context, ownerAPI];
};
