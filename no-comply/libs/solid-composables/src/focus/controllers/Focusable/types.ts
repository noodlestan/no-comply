import type {
	AriaGenericRegionAPI,
	AriaRegionAPI,
	AriaRegionProps,
	FocusableTagName,
} from '@no-comply/solid-accessibility';
import type {
	FocusContext,
	FocusContextOptions,
	FocusContextValue,
} from '@no-comply/solid-contexts';
import type { DataAttributeBoolean } from '@no-comply/solid-primitives';

export type FocusableProps = AriaRegionProps &
	FocusContextOptions & {
		tag?: FocusableTagName;
		tabIndex?: number;
	};

export type FocusableAPI = {
	$root: AriaGenericRegionAPI['$root'] & {
		component: FocusableTagName;
		onPointerDown: (ev: PointerEvent) => void;
		onFocusIn: (ev: FocusEvent) => void;
		onFocusOut: (ev: FocusEvent) => void;
		'data-focusable': string;
		'data-disabled': DataAttributeBoolean;
		'data-has-focus': DataAttributeBoolean;
		'data-has-focus-within': DataAttributeBoolean;
	};
	$target: {
		ref: (el: HTMLElement) => void;
		onFocus: (ev: FocusEvent) => void;
		onBlur: (ev: FocusEvent) => void;
		disabled: boolean | undefined;
		'data-focusable-target': '';
	};
	$label: AriaRegionAPI['$label'];
	$description: AriaRegionAPI['$description'];
	context: FocusContext;
	contextValue: FocusContextValue;
	isFocused: () => boolean;
	setFocus: () => void;
};
