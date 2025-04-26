import { staticClassList } from '@noodlestan/context-ui-primitives';
import { type ParentComponent, createEffect } from 'solid-js';

import { getFocusableElements } from '../../helpers';

import styles from './FocusTrap.module.css';
import type { FocusTrapProps } from './types';

export const FocusTrap: ParentComponent<FocusTrapProps> = props => {
    let containerRef: HTMLDivElement | undefined;

    const focusFirst = () =>
        setTimeout(() => {
            const focusableChildren = getFocusableElements(containerRef);
            focusableChildren[0]?.focus();
        });

    const focusLast = () =>
        setTimeout(() => {
            const focusableChildren = getFocusableElements(containerRef);
            focusableChildren[focusableChildren.length - 1]?.focus();
        });

    const handleBeforeFocus = (ev: FocusEvent) => {
        ev.preventDefault();
        focusLast();
    };

    const handleAfterFocus = (ev: FocusEvent) => {
        ev.preventDefault();
        focusFirst();
    };

    const handleKeyDown = (ev: KeyboardEvent) => {
        if (ev.key === 'Tab') {
            ev.preventDefault();
            if (ev.shiftKey) {
                focusLast();
            } else {
                focusFirst();
            }
        }
    };

    createEffect(() => {
        if (props.autoFocus) {
            focusFirst();
        }
    });

    return (
        <div classList={staticClassList(styles, 'FocusTrap')} data-focus-trap>
            <input
                type="text"
                data-focus-trap--input
                onFocus={handleBeforeFocus}
                onKeyDown={handleKeyDown}
                aria-hidden="true"
            />
            <div data-focus-trap--contents ref={containerRef}>
                {props.children}
            </div>
            <input
                type="text"
                data-focus-trap--input
                onFocus={handleAfterFocus}
                onKeyDown={handleKeyDown}
                aria-hidden="true"
            />
        </div>
    );
};
