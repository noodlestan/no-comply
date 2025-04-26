import type { FocusContext, FocusContextOptions, FocusContextValue } from '@noodlestan/context-ui';
import type {
    AriaGenericRegionAPI,
    AriaRegionAPI,
    AriaRegionProps,
    FocusableTagName,
} from '@noodlestan/context-ui-aria';

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
        'data-disabled': string | undefined;
        'data-focusable-has-focus': string;
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
