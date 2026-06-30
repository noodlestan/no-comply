import type { AttributeBoolean } from '@no-comply/solid-primitives';

export type AriaInputProps = {
	disabled?: boolean;
};

export type AriaInputRootAPI = {
	'aria-disabled': AttributeBoolean;
};

export type AriaInputAPI = {
	$root: AriaInputRootAPI;
};
