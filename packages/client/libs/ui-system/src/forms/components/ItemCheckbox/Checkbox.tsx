/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { CheckIcon } from 'lucide-solid';
import { Component, createSignal } from 'solid-js';

import './Checkbox.css';

export type CheckboxSize = 's' | 'm' | 'l';

export type CheckboxProps = {
    id?: string;
    checked?: boolean;
    size?: CheckboxSize;
    label?: string;
    onChangeValue?: (value: boolean) => void;
    disabled?: boolean;
    classList?: { [key: string]: boolean };
};

const defaultProps: Pick<CheckboxProps, 'size'> = {
    size: 'm',
};

export const Checkbox: Component<CheckboxProps> = props => {
    let inputRef: HTMLInputElement | undefined;

    const size = () => props.size || defaultProps.size;
    const [isFocused, setIsFocused] = createSignal<boolean>(false);

    const handleChange = () => {
        props.onChangeValue?.(!props.checked);
    };

    const handleFocus = () => setIsFocused(true);

    const handleBlur = () => setIsFocused(false);

    const handleMouseDown = (ev: MouseEvent) => {
        ev.stopImmediatePropagation();
        ev.preventDefault();
        inputRef?.focus();
    };

    const handleKeyDown = (ev: KeyboardEvent) => {
        ev.stopImmediatePropagation();
        if (ev.code === 'Space' || ev.code === 'Enter') {
            ev.preventDefault();
            handleChange();
        }
    };

    const handleClick = (ev: MouseEvent) => {
        ev.stopImmediatePropagation();
        handleChange();
    };

    const handlers = {
        onMouseDown: handleMouseDown,
        onClick: handleClick,
    };

    const inputHandlers = {
        onChange: handleChange,
        onFocus: handleFocus,
        onBlur: handleBlur,
        onKeyDown: handleKeyDown,
    };

    const classList = () => ({
        Checkbox: true,
        [`Checkbox-size-${size()}`]: true,
        'Checkbox-is-disabled': Boolean(props.disabled),
        'Checkbox-is-checked': !!props.checked,
        'Checkbox-is-focused': isFocused(),
    });

    return (
        <div classList={classList()} {...handlers}>
            <span classList={{ 'Checkbox--control': true }}>
                <CheckIcon />
                <input
                    ref={inputRef}
                    type="checkbox"
                    checked={props.checked}
                    disabled={props.disabled}
                    {...inputHandlers}
                    classList={classList()}
                    aria-label={props.label}
                />
            </span>
        </div>
    );
};
