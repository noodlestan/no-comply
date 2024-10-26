import { Component, JSX, createSignal } from 'solid-js';

import './TextInput.css';

export type TextInputSize = 'xs' | 's' | 'm' | 'l' | 'xl';
export type TextInputLength = 's' | 'm' | 'l' | 'full' | 'auto';

export type TextInputProps = {
    id?: string;
    value?: string;
    type?: string;
    placeholder?: string;
    size?: TextInputSize;
    length?: number | TextInputLength;
    maxLength?: number;
    min?: number;
    max?: number;
    autoConfirm?: boolean;
    modified?: boolean;
    disabled?: boolean;
    onChangeValue?: (value: string) => void;
    onConfirmValue?: (value: string) => void;
    onCancelValue?: () => void;
    classList?: { [key: string]: boolean };
};

const defaultProps: Pick<TextInputProps, 'size' | 'length'> = {
    size: 'm',
    length: 'auto',
};

const makeLength = (length: number | TextInputLength, maxLength?: number): string => {
    if (typeof length === 'number') {
        return `${length}em`;
    }
    if (length === 'auto' && maxLength) {
        return `${maxLength * 0.63 + 0.5}em`;
    }
    if (length === 'full') {
        return '100%';
    }
    return `var(--input-length-${length})`;
};

const makeStyle = (length?: TextInputLength | number, maxLength?: number) =>
    length ? { '--input-length': makeLength(length, maxLength) } : {};

export const TextInput: Component<TextInputProps> = props => {
    const size = () => props.size || defaultProps.size;
    const length = () => props.length || defaultProps.length;

    const [localValue, setLocalValue] = createSignal<string | undefined>();
    const value = () => localValue() ?? (props.value || '');
    const isModified = () => {
        if (props.modified) {
            return true;
        }
        const value = localValue();
        return value !== undefined && value !== props.value;
    };

    const confirm = () => {
        props.onConfirmValue?.(value());
        setLocalValue(undefined);
    };

    const cancel = () => {
        setLocalValue(undefined);
        props.onCancelValue?.();
    };

    const handleInput: JSX.EventHandlerUnion<HTMLInputElement, InputEvent> = event => {
        const target = event.target as HTMLInputElement;
        const v = target?.value || '';
        setLocalValue(v);
        props.onChangeValue?.(v);
    };

    const handleFocus = () => {
        setLocalValue(props.value);
    };

    const handleBlur = () => {
        if (props.autoConfirm) {
            confirm();
        } else {
            cancel();
        }
    };

    const handleKeyDown = (ev: KeyboardEvent) => {
        ev.stopImmediatePropagation();
        if (ev.key === 'Escape') {
            cancel();
        } else if (ev.key === 'Enter') {
            confirm();
        } else if (localValue() === undefined) {
            setLocalValue(props.value);
        }
    };

    const handleKeyUp = (ev: KeyboardEvent) => {
        ev.stopImmediatePropagation();
    };

    const handleKeyPress = (ev: KeyboardEvent) => {
        ev.stopImmediatePropagation();
    };

    const handlers = {
        onInput: handleInput,
        onFocus: handleFocus,
        onBlur: handleBlur,
        onKeyDown: handleKeyDown,
        onKeyUp: handleKeyUp,
        onKeyPress: handleKeyPress,
    };

    const classList = () => ({
        ...props.classList,
        TextInput: true,
        'TextInput-is-disabled': props.disabled,
        'TextInput-is-modified': isModified(),
        [`TextInput-size-${size()}`]: true,
    });

    const style = () => makeStyle(length(), props.maxLength);

    return (
        <input
            id={props.id}
            type={props.type}
            placeholder={props.placeholder}
            maxLength={props.maxLength}
            min={props.min}
            max={props.max}
            value={value()}
            disabled={props.disabled}
            {...handlers}
            classList={classList()}
            style={style()}
        />
    );
};
