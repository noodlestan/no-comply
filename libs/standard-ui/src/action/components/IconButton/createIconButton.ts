import { createIconAction } from '@no-comply/solid-composables';
import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { combineProps, computedProps } from '@no-comply/solid-primitives';

import { createIconButtonMixin } from '../../mixins';
import { createButton } from '../Button';

import { $ICON_BUTTON } from './constants';
import type { IconButtonAPI, IconButtonProps } from './types';

export const createIconButton = (props: IconButtonProps): IconButtonAPI => {
	const [locals, expose, compose] = createExposable($ICON_BUTTON, props);

	const { $root: $buttonRoot, size } = compose(createButton(locals));
	const { $root: $iconButtonRoot, icon } = compose(createIconAction(locals));

	const iconButttonProps = combineProps(
		locals,
		computedProps({
			size,
		}),
	);
	const { $root: $iconButtonMixinRoot, icon: iconButtonMixinIcon } =
		createIconButtonMixin(iconButttonProps);

	return exposeAPI(expose, '$root', {
		$root: combineProps($buttonRoot, $iconButtonRoot, $iconButtonMixinRoot),
		icon: combineProps(icon, iconButtonMixinIcon),
	});
};
