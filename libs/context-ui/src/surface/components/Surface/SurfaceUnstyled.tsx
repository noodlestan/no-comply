import { type Component, type JSX, createSignal, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import type { ClassList, Styles } from '../../../dom';

export type SurfaceUnstyledProps = Omit<JSX.HTMLAttributes<HTMLElement>, 'style'> & {
    tag?: string;
    onClick?: () => void;
    onTap?: () => void;
    isInteractive?: boolean;
    disabled?: boolean;
    ref?: (el: Element) => void;
    classList?: ClassList;
    style?: Styles;
    children?: JSX.Element;
};

const defaultProps: Pick<SurfaceUnstyledProps, 'tag'> = {
    tag: 'div',
};

export const SurfaceUnstyled: Component<SurfaceUnstyledProps> = props => {
    const [locals, elementProps] = splitProps(props, [
        'tag',
        'onClick',
        'onTap',
        'isInteractive',
        'disabled',
        'onKeyDown',
        'onKeyPress',
        'onFocus',
        'onBlur',
        'tabindex',
        'children',
    ]);

    const [isActive, setIsActive] = createSignal(false);

    const handleFocus: JSX.FocusEventHandler<HTMLElement, FocusEvent> = ev => {
        setIsActive(true);
        if (typeof locals.onFocus === 'function') {
            locals.onFocus(ev);
        }
    };

    const handleBlur: JSX.FocusEventHandler<HTMLElement, FocusEvent> = ev => {
        setIsActive(false);
        if (typeof locals.onBlur === 'function') {
            locals.onBlur(ev);
        }
    };

    const handleKeyDown: JSX.EventHandler<HTMLElement, KeyboardEvent> = ev => {
        if (ev.key === 'Enter') {
            locals.onTap?.();
        } else {
            if (typeof locals.onKeyDown === 'function') {
                locals.onKeyDown(ev);
            }
        }
    };

    const handleKeyPress: JSX.EventHandler<HTMLElement, KeyboardEvent> = ev => {
        if (!locals.onTap && ev.key === 'Enter') {
            locals.onClick?.();
        } else {
            if (typeof locals.onKeyPress === 'function') {
                locals.onKeyPress(ev);
            }
        }
    };

    const tabindex = () => locals.tabindex || (locals.onClick || locals.onTap ? 0 : undefined);

    const tag = () => locals.tag || defaultProps.tag;

    const childProps = () => {
        return {
            ...elementProps,
            'data-is-interactive': Boolean(tabindex()) || locals.isInteractive,
            'data-is-active': isActive(),
            'data-is-disabled': locals.disabled,
        };
    };

    return (
        <Dynamic
            {...childProps()}
            component={tag()}
            disabled={locals.disabled}
            onClick={locals.onClick}
            onMouseDown={locals.onTap}
            onTouchStart={locals.onTap}
            onKeyDown={handleKeyDown}
            onKeyPress={handleKeyPress}
            onFocus={handleFocus}
            onBlur={handleBlur}
            tabIndex={tabindex()}
        >
            {locals.children}
        </Dynamic>
    );
};
