import { Component, JSX, Show } from 'solid-js';

import './Select.css';

export type SelectSize = 'xs' | 's' | 'm' | 'l' | 'xl';
export type SelectLength = 's' | 'm' | 'l' | 'full' | 'auto';

export type SelectProps = {
    id?: string;
    value?: string;
    placeholder?: string;
    size?: SelectSize;
    length?: number | SelectLength;
    modified?: boolean;
    disabled?: boolean;
    invalid?: boolean;
    onChangeValue?: (id: string) => void;
    ref?: (el: HTMLSelectElement) => void;
    classList?: { [key: string]: boolean };
    children?: JSX.Element;
};

const defaultProps: Pick<SelectProps, 'size' | 'length'> = {
    size: 'm',
    length: 'full',
};

const makeLength = (length: number | SelectLength): string => {
    if (typeof length === 'number') {
        return `${length}em`;
    }
    if (length === 'full') {
        return '100%';
    }
    if (length === 'auto') {
        return 'min-content';
    }
    return `var(--select-length-${length})`;
};

const makeStyle = (length?: number | SelectLength) =>
    length ? { '--select-length': makeLength(length) } : {};

export const Select: Component<SelectProps> = props => {
    const size = () => props.size || defaultProps.size;
    const length = () => props.length || defaultProps.length;

    const handleChange = (ev: Event) => {
        const target = ev.target as HTMLSelectElement;
        props.onChangeValue?.(target?.value || '');
    };

    const handleKeyDown = (ev: KeyboardEvent) => {
        ev.stopImmediatePropagation();
    };

    const handleKeyUp = (ev: KeyboardEvent) => {
        ev.stopImmediatePropagation();
    };

    const handlers = {
        onChange: handleChange,
        onKeyDown: handleKeyDown,
        onKeyUp: handleKeyUp,
    };

    const classList = () => ({
        ...props.classList,
        Select: true,
        'Select-is-disabled': props.disabled,
        'Select-is-invalid': Boolean(props.invalid),
        'Select-is-modified': Boolean(props.modified),
        [`Select-size-${size()}`]: true,
    });

    const style = () => makeStyle(length());

    return (
        <select
            id={props.id}
            value={props.value || ''}
            disabled={props.disabled}
            {...handlers}
            ref={props.ref}
            classList={classList()}
            style={style()}
        >
            <Show when={!!props.placeholder}>
                <option value="">{props.placeholder}</option>
            </Show>
            {props.children}
        </select>
    );
};
