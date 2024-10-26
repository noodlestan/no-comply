import { Component, JSX, createSignal } from 'solid-js';

import './NumberInput.css';

export type NumberInputSize = 'xs' | 's' | 'm' | 'l' | 'xl';
export type NumberInputLength = 's' | 'm' | 'l' | 'full' | 'auto';

export type NumberInputProps = {
    id?: string;
    value?: string;
    placeholder?: string;
    size?: NumberInputSize;
    length?: number | NumberInputLength;
    maxLength?: number;
    min?: number;
    max?: number;
    step?: number;
    autoConfirm?: boolean;
    modified?: boolean;
    disabled?: boolean;
    error?: boolean;
    onChangeValue?: (value: string) => void;
    onConfirmValue?: (value: string) => void;
    onCancelValue?: () => void;
    classList?: { [key: string]: boolean };
};

const defaultProps: Pick<NumberInputProps, 'size' | 'length'> = {
    size: 'm',
    length: 'auto',
};

const makeLength = (length: number | NumberInputLength, maxLength?: number): string => {
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

const makeStyle = (length?: NumberInputLength | number, maxLength?: number) =>
    length ? { '--input-length': makeLength(length, maxLength) } : {};

export const NumberInput: Component<NumberInputProps> = props => {
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
        NumberInput: true,
        'NumberInput-is-disabled': Boolean(props.disabled),
        'NumberInput-has-error': Boolean(props.error),
        'NumberInput-is-modified': isModified(),
        [`NumberInput-size-${size()}`]: true,
    });

    const style = () => makeStyle(length(), props.maxLength);

    return (
        <input
            id={props.id}
            type="number"
            placeholder={props.placeholder}
            min={props.min}
            max={props.max}
            step={props.step}
            value={value()}
            disabled={props.disabled}
            {...handlers}
            classList={classList()}
            style={style()}
        />
    );
};
