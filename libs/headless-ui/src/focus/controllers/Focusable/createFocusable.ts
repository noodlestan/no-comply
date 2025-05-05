import { createFocusContext } from '@noodlestan/context-ui';
import { createAriaRegion } from '@noodlestan/context-ui-aria';
import { createComputedProps, mergeProps } from '@noodlestan/context-ui-primitives';

import type { FocusableAPI, FocusableProps } from './types';

export const createFocusable = (props: FocusableProps = {}): FocusableAPI => {
    const contextValue = createFocusContext(props);
    const [context] = contextValue;

    const { $root: $regionRoot, $label, $description } = createAriaRegion(props);

    const setFocus = () => context.setFocus();

    const onPointerDown = (ev: MouseEvent) => {
        ev.stopImmediatePropagation();
        if (!context.hasFocusWithin()) {
            ev.preventDefault();
            context.setFocus();
        }
    };

    const onFocusIn = () => context.setHasFocusWithin(true);

    const onFocusOut = (ev: FocusEvent) => {
        const container = ev.currentTarget as Node | null;
        if (container?.contains(ev.relatedTarget as Node)) {
            return;
        }
        context.setHasFocusWithin(false);
    };

    const $static = {
        onPointerDown,
        onFocusIn,
        onFocusOut,
        'data-focusable': '',
    };

    const component = () => props.tag ?? 'div';
    const $localRoot = createComputedProps($static, {
        component,
        'data-disabled': () => (props.disabled ? '' : undefined),
        'data-focusable-has-focus': () => String(context.hasFocus()),
        'data-focusable-has-focus-within': () => String(context.hasFocusWithin()),
    });

    const onFocus = () => context.setHasFocus(true);
    const onBlur = () => context.setHasFocus(false);
    const $targetStatic = {
        ref: context.setTargetRef,
        onFocus,
        onBlur,
        'data-focusable-target': '' as const,
    };
    const $target = createComputedProps($targetStatic, {
        disabled: () => Boolean(props.disabled),
    });

    return {
        $root: mergeProps($regionRoot, $localRoot),
        $target,
        $label,
        $description,
        context,
        contextValue,
        isFocused: context.hasFocus,
        setFocus,
    };
};
