import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { combineProps } from '@no-comply/solid-primitives';
import XIcon from 'lucide-solid/icons/x';

import type { ActionVariant } from '../../types';

import { $CLOSE_BUTTON } from './constants';
import type { CloseButtonAPI, CloseButtonProps } from './types';

export const createCloseButton = (props: CloseButtonProps): CloseButtonAPI => {
	const [locals, expose] = createExposable($CLOSE_BUTTON, props);

	const _iconButton = {
		variant: 'plain' as ActionVariant,
		icon: XIcon,
	};

	return exposeAPI(expose, '_iconButton', {
		_iconButton: combineProps(locals, _iconButton),
	});
};
