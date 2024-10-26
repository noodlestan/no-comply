/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Component, createSignal } from 'solid-js';

import { Flex } from '../../../layouts';

import './ItemCheckbox.css';

export type ItemCheckboxProps = {
    id: string;
    checked?: boolean;
    label?: string;
    onChangeValue?: (value: boolean) => void;
    onFocus?: () => void;
    onKeyDown?: (ev: KeyboardEvent) => void;
};
export const ItemCheckbox: Component<ItemCheckboxProps> = props => {
    const [isFocused, setIsFocused] = createSignal<boolean>(false);

    const classList = () => ({
        ItemCheckbox: true,
        'ItemCheckbox-is-checked': !!props.checked,
        'ItemCheckbox-is-focused': isFocused(),
    });

    let inputRef: HTMLInputElement | undefined;

    const handleClick = (ev: MouseEvent) => {
        ev.stopPropagation();
    };

    const handleOnChange = () => {
        props?.onChangeValue?.(!props.checked);
    };

    const handleFocus = () => {
        setIsFocused(true);
        props?.onFocus?.();
    };
    const handleBlur = () => setIsFocused(false);

    const handleKeyDown = (ev: KeyboardEvent) => {
        if (ev.code !== 'Space') {
            props?.onKeyDown?.(ev);
        }
    };

    return (
        <Flex gap="m" classList={classList()}>
            <div class="ItemCheckbox--Control" onClick={handleClick}>
                <input
                    ref={inputRef}
                    tabindex="0"
                    type="checkbox"
                    onChange={handleOnChange}
                    checked={props.checked}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onKeyDown={handleKeyDown}
                    aria-label={props.label}
                />
            </div>
        </Flex>
    );
};
