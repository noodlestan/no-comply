import { createAriaRegion } from '../../aria/region/createAriaRegion';
import { createDataAttributes } from '../../dom';
import { type FocusContext } from '../providers';
import type {
    FocusableAPI,
    FocusableContainerProps,
    FocusableOptions,
    FocusableTargetProps,
} from '../types';

export const createFocusable = (
    context: FocusContext,
    options: FocusableOptions = {},
): FocusableAPI => {
    let elementRef: HTMLElement | undefined;

    const region = createAriaRegion(options);

    const setFocus = () => elementRef?.focus();

    const handleMouseDown = (ev: MouseEvent) => {
        ev.preventDefault();
        ev.stopImmediatePropagation();
        context.setFocus();
    };

    const dataAttributes = createDataAttributes(() => ({
        focusable: '',
        'focusable-has-focus': Boolean(context.hasFocus()),
    }));

    const containerProps = (): FocusableContainerProps => ({
        ...region.elProps(),
        ...context.containerProps,
        ...dataAttributes(),
        onMouseDown: handleMouseDown,
    });

    const targetProps = (): FocusableTargetProps => ({
        ...context.targetProps,
        'aria-hidden': true,
    });

    return {
        containerProps,
        targetProps,
        labelProps: region.labelProps,
        isFocused: context.hasFocus,
        setFocus,
    };
};
