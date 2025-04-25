import type { FocusContext, FocusContextOptions, FocusContextValue } from '@noodlestan/context-ui';
import type {
    AriaLabelledAPI,
    AriaRegionElementProps,
    AriaRegionProps,
    FocusableTagName,
} from '@noodlestan/context-ui-aria';

export type FocusableProps = AriaRegionProps &
    FocusContextOptions & {
        component?: FocusableTagName;
        tabIndex?: number;
    };

export type FocusableAPI = {
    elProps: AriaRegionElementProps & {
        component: FocusableTagName;
        onPointerDown: (ev: PointerEvent) => void;
        onFocusIn: (ev: FocusEvent) => void;
        onFocusOut: (ev: FocusEvent) => void;
        'data-focusable': string;
        'data-disabled': string | undefined;
        'data-focusable-has-focus': string;
    };
    targetProps: {
        ref: (el: HTMLElement) => void;
        onFocus: (ev: FocusEvent) => void;
        onBlur: (ev: FocusEvent) => void;
        disabled: boolean | undefined;
        'data-focusable-target': '';
    };
    labelProps: AriaLabelledAPI['labelProps'];
    descriptionProps: AriaLabelledAPI['descriptionProps'];
    context: FocusContext;
    contextValue: FocusContextValue;
    isFocused: () => boolean;
    setFocus: () => void;
};
