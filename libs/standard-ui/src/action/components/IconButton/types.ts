import type { IconActionAPI, IconActionProps } from '@no-comply/solid-composables';
import type { ClassList } from '@no-comply/solid-primitives';

import type { ContentSize } from '../../../types';
import type { IconButtonMixinAPI, IconButtonMixinProps } from '../../mixins';
import type { ButtonAPI, ButtonProps } from '../Button';

export type IconButtonProps = ButtonProps &
	IconActionProps &
	Omit<IconButtonMixinProps, 'size'> & {
		size?: ContentSize;
	};

export type IconButtonAPI = {
	$root: ButtonAPI['$root'] &
		IconActionAPI['$root'] &
		IconButtonMixinAPI['$root'] & {
			classList: ClassList;
		};
	icon: IconActionAPI['icon'] & IconButtonMixinAPI['icon'];
};
