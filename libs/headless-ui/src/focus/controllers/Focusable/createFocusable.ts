import { createFocusContext } from '@noodlestan/context-ui';
import { createAriaRegion } from '@noodlestan/context-ui-aria';
import { createComputedProps, mergeProps } from '@noodlestan/context-ui-primitives';

import type { FocusableAPI, FocusableProps } from './types';

export const createFocusable = (props: FocusableProps = {}): FocusableAPI => {
    const contextValue = createFocusContext(props);
    const [context] = contextValue;

    const { elProps: regionProps, labelProps, descriptionProps } = createAriaRegion(props);

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
    const tabIndex = () => (props.disabled ? undefined : 0);
    const elProps = createComputedProps(containerStaticProps, {
        component,
        tabIndex,
        'data-disabled': () => (props.disabled ? '' : undefined),
        'data-focusable-has-focus': () => String(context.hasFocus()),
    });

    const onFocus = () => context.setHasFocus(true);

    const onBlur = () => context.setHasFocus(false);

    const targetStaticProps = {
        ref: context.setTargetRef,
        onFocus,
        onBlur,
        'data-focusable-target': '' as const,
    };

    const targetProps = createComputedProps(targetStaticProps, {
        disabled: () => Boolean(props.disabled),
    });

    return {
        elProps: mergeProps(regionProps, elProps),
        targetProps,
        labelProps,
        descriptionProps,
        context,
        contextValue,
        isFocused: context.hasFocus,
        setFocus,
    };
};
