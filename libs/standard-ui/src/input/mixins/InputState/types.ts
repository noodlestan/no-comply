import type { BaseInputProps } from '@no-comply/solid-composables';
import type { ClassList } from '@no-comply/solid-primitives';

export type InputStateMixinProps = Omit<BaseInputProps, 'id'> & {
	modified?: boolean;
	positive?: boolean;
};

export type InputStateMixinAPI = {
	$root: {
		classList: ClassList;
	};
};
