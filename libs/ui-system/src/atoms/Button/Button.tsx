import { type Component, type JSX, Show } from 'solid-js';

import type { ClassList, DataAttributes } from '../../dom';

import './Button.css';

export type ButtonVariant = 'primary' | 'secondary' | 'plain' | 'danger' | 'transparent';
export type ButtonSize = 'xs' | 's' | 'm' | 'l';
export type ButtonLength = 's' | 'm' | 'l' | 'full' | 'auto';
export type ButtonTag = 'auto' | 'div';
export type ButtonElement = HTMLButtonElement | HTMLAnchorElement | HTMLDivElement;

export type ButtonProps = {
    variant?: ButtonVariant;
    size?: ButtonSize;
    length?: number | ButtonLength;
    disabled?: boolean;
    selected?: boolean;
    onClick?: (ev: Event) => void;
    onShiftClick?: (ev: Event) => void;
    onAltClick?: (ev: Event) => void;
    onFocus?: () => void;
    onBlur?: (event: FocusEvent) => void;
    onTap?: () => void;
    id?: string;
    label?: string;
    href?: string;
    target?: string;
    tag?: ButtonTag;
    role?: JSX.HTMLAttributes<HTMLDivElement>['role'];
    classList?: ClassList;
    ref?: (el: ButtonElement) => void;
    children?: JSX.Element;
} & DataAttributes;

const defaultProps: Pick<ButtonProps, 'variant' | 'size' | 'length'> = {
    variant: 'primary',
    size: 's',
    length: 'auto',
};

const makeLength = (length: number | ButtonLength): string => {
    if (typeof length === 'number') {
        return `${length}em`;
    }
    if (length === 'auto') {
        return 'auto';
    }
    if (length === 'full') {
        return '100%';
    }
    return `var(--button-length-${length})`;
};

const makeStyle = (length?: number | ButtonLength) =>
    length ? { '--button-length': makeLength(length) } : {};

export const Button: Component<ButtonProps> = props => {
    const variant = () => props.variant || defaultProps.variant;
    const size = () => props.size || defaultProps.size;
    const length = () => props.length || defaultProps.length;
    const explicitTag = () => props.tag !== undefined && props.tag !== 'auto';
    const autoTag = () => (props.href ? 'a' : 'button');
    const tag = () => (explicitTag() ? props.tag : autoTag());
    const target = () => (props.href ? props.target : undefined);
    const style = () => makeStyle(length());

    const handleClick = (ev: MouseEvent) => {
        ev.stopImmediatePropagation();
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

    const handleMouseDown = (ev: MouseEvent | TouchEvent) => {
        if (!props.disabled) {
            ev.stopImmediatePropagation();
            props.onTap?.();
        }
    };

    const handleKeyDown = (ev: KeyboardEvent) => {
        if (!props.disabled) {
            if (ev.key === 'Enter') {
                ev.stopImmediatePropagation();
                if (tag() === 'a') {
                    props.onClick?.(ev);
                }
                props.onTap?.();
            }
            if (ev.key === ' ') {
                if (ev.shiftKey && props.onShiftClick) {
                    ev.stopImmediatePropagation();
                    props.onShiftClick?.(ev);
                    return;
                }
                if (ev.altKey && props.onAltClick) {
                    ev.stopImmediatePropagation();
                    props.onAltClick?.(ev);
                }
            }
        }
    };

    const handleKeyPress = (ev: KeyboardEvent) => {
        ev.preventDefault();
        if (!props.disabled) {
            if (tag() !== 'a' && ev.key === 'Enter') {
                ev.stopImmediatePropagation();
                props.onClick?.(ev);
            }
        }
    };

    const handlers = () => ({
        onClick: handleClick,
        onFocus: props.onFocus,
        onBlur: props.onBlur,
        onMouseDown: handleMouseDown,
        onTouchStart: handleMouseDown,
        onKeyDown: handleKeyDown,
        onKeyPress: handleKeyPress,
    });

    const dataProps = (): Record<string, string | boolean | undefined> => {
        const dataAttributes: Record<string, string | boolean | undefined> = {};
        for (const key in props) {
            if (key.startsWith('data-')) {
                dataAttributes[key] = props[key as keyof ButtonProps] as
                    | string
                    | boolean
                    | undefined;
            }
        }
        return dataAttributes;
    };

    const classList = () => ({
        ...props.classList,
        Button: true,
        'Button-is-disabled': Boolean(props.disabled),
        'Button-is-selected': Boolean(props.selected),
        [`Button-size-${size()}`]: true,
        [`Button-variant-${variant()}`]: true,
        [`Button-styled`]: variant() !== 'transparent',
    });

    const ariaProps = (): JSX.AriaAttributes => {
        const label = {
            'aria-label': props.label,
            title: props.label,
        };
        if (props.role || props.tag !== 'auto') {
            return {
                ...label,
                role: props.role,
            };
        }
        return label;
    };

    const commonProps = (): Pick<JSX.HTMLAttributes<HTMLElement>, 'classList' | 'style' | 'id'> => {
        return {
            classList: classList(),
            style: style(),
            id: props.id,
        };
    };

    return (
        <>
            <Show when={tag() === 'a'}>
                <a
                    ref={props.ref}
                    {...commonProps()}
                    href={props.href}
                    target={target()}
                    {...dataProps()}
                    {...handlers()}
                    {...ariaProps()}
                >
                    {props.children}
                </a>
            </Show>
            <Show when={tag() === 'button'}>
                <button
                    ref={props.ref}
                    {...commonProps()}
                    disabled={props.disabled}
                    {...dataProps()}
                    {...handlers()}
                    {...ariaProps()}
                >
                    {props.children}
                </button>
            </Show>
            <Show when={tag() === 'div'}>
                <div
                    ref={props.ref}
                    classList={classList()}
                    style={style()}
                    tabIndex={!props.disabled ? 0 : undefined}
                    {...dataProps()}
                    {...handlers()}
                    {...ariaProps()}
                >
                    {props.children}
                </div>
            </Show>
        </>
    );
};
