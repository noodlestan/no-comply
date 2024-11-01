import { Component, JSX, createSignal, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';

export type SurfaceUnstyledProps = {
    tag?: string;
    onClick?: () => void;
    onTap?: () => void;
    isInteractive?: boolean;
    disabled?: boolean;
    classList?: { [key: string]: boolean };
    style?: { [key: string]: string | undefined };
    children?: JSX.Element;
};

const defaultProps: Pick<SurfaceUnstyledProps, 'tag'> = {
    tag: 'div',
};

export const SurfaceUnstyled: Component<
    SurfaceUnstyledProps & JSX.HTMLAttributes<HTMLDivElement>
> = props => {
    const [isActive, setIsActive] = createSignal(false);

    const handleFocus: JSX.FocusEventHandler<HTMLDivElement, FocusEvent> = ev => {
        setIsActive(true);
        if (typeof props.onFocus === 'function') {
            props.onFocus(ev);
        }
    };

    const handleBlur: JSX.FocusEventHandler<HTMLDivElement, FocusEvent> = ev => {
        setIsActive(false);
        if (typeof props.onBlur === 'function') {
            props.onBlur(ev);
        }
    };

    const handleKeyDown: JSX.EventHandler<HTMLDivElement, KeyboardEvent> = ev => {
        if (ev.key === 'Enter') {
            props.onTap?.();
        } else {
            if (typeof props.onKeyDown === 'function') {
                props.onKeyDown(ev);
            }
        }
    };

    const handleKeyPress: JSX.EventHandler<HTMLDivElement, KeyboardEvent> = ev => {
        if (!props.onTap && ev.key === 'Enter') {
            props.onClick?.();
        } else {
            if (typeof props.onKeyPress === 'function') {
                props.onKeyPress(ev);
            }
        }
    };

    const tabindex = () => (props.onClick || props.onTap ? 0 : undefined);
    const tag = () => props.tag || defaultProps.tag;

    const [, childProps] = splitProps(props, ['isInteractive']);

    return (
        <Dynamic
            {...childProps}
            component={tag()}
            onClick={props.onClick}
            onMouseDown={props.onTap}
            onTouchStart={props.onTap}
            onKeyDown={handleKeyDown}
            onKeyPress={handleKeyPress}
            onFocus={handleFocus}
            onBlur={handleBlur}
            tabindex={tabindex()}
            classList={props.classList}
            style={props.style}
            data-is-interactive={!!tabindex() || props.isInteractive}
            data-is-active={isActive()}
            data-is-disabled={props.disabled}
        >
            {props.children}
        </Dynamic>
    );
};
