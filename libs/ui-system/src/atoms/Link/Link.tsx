import type { Component, JSX } from 'solid-js';

import type { ClassList } from '../../dom';

import './Link.css';

export type LinkProps = {
    href?: string;
    onClick?: () => void;
    onTap?: () => void;
    disabled?: boolean;
    ref?: (el: Element) => void;
    classList?: ClassList;
    children?: JSX.Element;
};

export const Link: Component<LinkProps> = props => {
    const classList = () => ({
        ...props.classList,
        Link: true,
        [`Link-is-disabled`]: props.disabled,
    });

    const handleMouseDown = (ev: MouseEvent | TouchEvent) => {
        if (!props.disabled) {
            ev.stopImmediatePropagation();
            props.onTap?.();
        }
    };

    const handleClick = () => {
        if (!props.disabled) {
            props.onClick?.();
        }
    };

    const handleTap = () => {
        if (!props.disabled) {
            props.onTap?.();
        }
    };

    const handleKeyDown = (ev: KeyboardEvent) => {
        if (!props.disabled) {
            if (ev.key === 'Enter') {
                ev.stopImmediatePropagation();
                handleTap();
            }
        }
    };

    return (
        <a
            href={props.href}
            onClick={handleClick}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTap}
            onKeyDown={handleKeyDown}
            ref={props.ref}
            classList={classList()}
        >
            {props.children}
        </a>
    );
};
