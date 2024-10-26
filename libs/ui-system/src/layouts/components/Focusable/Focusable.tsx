import { Component, JSX, createSignal, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { Button, ButtonElement, ButtonProps } from '../../../atoms';
import { uuid } from '../../../functions';
import { DataAttributes } from '../../../types';

import './Focusable.css';

export type FocusableTag = 'div';

export type FocusableProps = Omit<
    ButtonProps,
    'label' | 'onFocus' | 'onBlur' | 'classList' | 'tag' | 'role'
> & {
    label: string;
    classList?: { [key: string]: boolean };
    tag?: FocusableTag;
    role?: JSX.HTMLAttributes<HTMLDivElement>['role'];
    children?: JSX.Element;
} & DataAttributes;

const defaultProps: Pick<FocusableProps, 'tag'> = {
    tag: 'div',
};

export const Focusable: Component<FocusableProps> = props => {
    let buttonRef: ButtonElement | undefined;

    const [isFocused, setIsFocused] = createSignal<boolean>(false);

    const id = uuid();

    const tag = () => props.tag || defaultProps.tag;

    const handleMouseDown = (ev: MouseEvent) => {
        ev.preventDefault();
        ev.stopPropagation();
        buttonRef?.focus();
    };

    const handleClick = (ev: MouseEvent) => {
        if (!props.href) {
            ev.preventDefault();
        }
        if (ev.shiftKey && props.onShiftClick) {
            props.onShiftClick?.(ev);
            return;
        }
        if (ev.altKey && props.onAltClick) {
            props.onAltClick?.(ev);
            return;
        }
        props.onClick?.(ev);
    };

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);

    const ariaProps = (): JSX.AriaAttributes => {
        return {
            role: props.role || 'region',
            'aria-labelledby': uuid(),
        };
    };

    const [, buttonProps] = splitProps(props, ['label', 'classList', 'tag', 'role']);

    const classList = () => ({
        ...props.classList,
        Focusable: true,
        'Focusable-is-disabled': props.disabled,
        'Focusable-is-focused': isFocused(),
    });

    return (
        <Dynamic
            component={tag()}
            classList={classList()}
            {...ariaProps()}
            onMouseDown={handleMouseDown}
            onClick={handleClick}
        >
            <Button
                {...buttonProps}
                ref={el => {
                    buttonRef = el;
                }}
                variant="transparent"
                onFocus={handleFocus}
                onBlur={handleBlur}
                id={id}
                classList={{ 'Focusable--button': true }}
            >
                {props.label}
            </Button>
            {props.children}
        </Dynamic>
    );
};
