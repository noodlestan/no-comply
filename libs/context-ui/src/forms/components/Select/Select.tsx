import type { ClassList, PickRequired } from '@noodlestan/context-ui-primitives';
import { type ParentComponent, Show } from 'solid-js';

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
    classList?: ClassList;
};

const defaultProps: PickRequired<SelectProps, 'size' | 'length'> = {
    size: 's',
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

export const Select: ParentComponent<SelectProps> = props => {
    const size = () => props.size ?? defaultProps.size;
    const length = () => props.length ?? defaultProps.length;

    const handleChange = (ev: Event) => {
        const target = ev.target as HTMLSelectElement;
        props.onChangeValue?.(target?.value ?? '');
    };

    const handleKeyDown = (ev: KeyboardEvent) => {
        ev.stopImmediatePropagation();
    };

    const handleKeyUp = (ev: KeyboardEvent) => {
        ev.stopImmediatePropagation();
    };

    // NOTE: using spread operator in `<select>` causes expected selected option to not be selected
    // because attributes/children are committed to the DOM in a different order
    // See: https://github.com/solidjs/solid/issues/1754
    // const handlers = {
    //     onChange: handleChange,
    //     onKeyDown: handleKeyDown,
    //     onKeyUp: handleKeyUp,
    // };

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
            disabled={props.disabled}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            onKeyUp={handleKeyUp}
            classList={classList()}
            style={style()}
            value={props.value ?? ''}
        >
            <Show when={!!props.placeholder}>
                <option value="">{props.placeholder}</option>
            </Show>
            {props.children}
        </select>
    );
};
