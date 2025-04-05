import type { FocusContext } from '@noodlestan/context-ui';
import { createAriaRegion } from '@noodlestan/context-ui-aria';
import { createComputedProps, mergeProps } from '@noodlestan/context-ui-types';

import type { FocusableAPI, FocusableProps } from './types';

export const createFocusable = (
    context: FocusContext,
    props: FocusableProps = {},
): FocusableAPI => {
    const { elProps: regionProps, labelProps } = createAriaRegion(props);

    const setFocus = () => context.setFocus();

    const onPointerDown = (ev: MouseEvent) => {
        ev.preventDefault();
        ev.stopImmediatePropagation();
        context.setFocus();
    };

    const onFocusIn = () => context.setHasFocusWithin(true);

    const onFocusOut = (ev: FocusEvent) => {
        const container = ev.currentTarget as Node | null;
        if (container?.contains(ev.relatedTarget as Node)) {
            return;
        }
        context.setHasFocusWithin(false);
    };

    const containerStaticProps = {
        onPointerDown,
        onFocusIn,
        onFocusOut,
        'data-focusable': '',
    };

    const component = () => props.component ?? 'div';

    const containerProps = createComputedProps(containerStaticProps, {
        component,
        'data-disabled': () => (props.disabled ? '' : undefined),
        'data-focusable-has-focus': () => String(context.hasFocus()),
    });

    const onFocus = () => context.setHasFocus(true);

    const onBlur = () => context.setHasFocus(false);

    const targetStaticProps = {
        ref: context.setTargetRef,
        onFocus,
        onBlur,
        'aria-hidden': true,
        'data-focusable-target': '' as const,
    };

    const targetProps = createComputedProps(targetStaticProps, {
        disabled: () => Boolean(props.disabled),
    });

    return {
        containerProps: mergeProps(regionProps, containerProps),
        targetProps,
        labelProps,
        isFocused: context.hasFocus,
        setFocus,
    };
};
