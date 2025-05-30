/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import type { ClassList, PickRequired } from '@no-comply/solid-primitives';
import { CheckIcon } from 'lucide-solid';
import { type Component, createSignal } from 'solid-js';

import './Checkbox.module.scss';

export type CheckboxSize = 's' | 'm' | 'l';

export type CheckboxProps = {
    id?: string;
    checked?: boolean;
    size?: CheckboxSize;
    label?: string;
    modified?: boolean;
    disabled?: boolean;
    invalid?: boolean;
    onChangeValue?: (value: boolean) => void;
    ref?: (el: HTMLInputElement) => void;
    classList?: ClassList;
};

const defaultProps: PickRequired<CheckboxProps, 'size'> = {
    size: 's',
};

export const Checkbox: Component<CheckboxProps> = props => {
    let inputRef: HTMLInputElement | undefined;

    const size = () => props.size ?? defaultProps.size;
    const [isFocused, setIsFocused] = createSignal<boolean>(false);

    const setInputRef = (ref: HTMLInputElement) => {
        inputRef = ref;
        props.ref?.(ref);
    };

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
        if (ev.key === ' ' || ev.key === 'Enter') {
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
        [`size-${size()}`]: true,
        'is-disabled': Boolean(props.disabled),
        'is-invalid': Boolean(props.invalid),
        'is-modified': Boolean(props.modified),
        'is-checked': !!props.checked,
        'is-focused': isFocused(),
    });

    return (
        <div classList={classList()} {...handlers}>
            <span classList={{ 'Checkbox--control': true }}>
                <CheckIcon />
                <input
                    // eslint-disable-next-line solid/reactivity
                    ref={setInputRef}
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
