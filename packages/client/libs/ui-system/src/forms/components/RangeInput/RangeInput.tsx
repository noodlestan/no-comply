import { Component, JSX, createSignal } from 'solid-js';

import './RangeInput.css';

export type RangeInputSize = 'xs' | 's' | 'm' | 'l' | 'xl';
export type RangeInputLength = 's' | 'm' | 'l' | 'full' | 'auto';

export type RangeInputProps = {
    id?: string;
    value?: string;
    min?: number;
    max?: number;
    step?: number;
    size?: RangeInputSize;
    length?: number | RangeInputLength;
    autoConfirm?: boolean;
    modified?: boolean;
    disabled?: boolean;
    error?: boolean;
    onChangeValue?: (value: string) => void;
    onConfirmValue?: (value: string) => void;
    onCancelValue?: () => void;
    classList?: { [key: string]: boolean };
};

const defaultProps: Pick<RangeInputProps, 'size' | 'length'> = {
    size: 'm',
    length: 'auto',
};

const makeLength = (length: number | RangeInputLength): string => {
    if (typeof length === 'number') {
        return `${length}em`;
    }
    if (length === 'full') {
        return '100%';
    }
    return `var(--input-length-${length})`;
};

const makeStyle = (length?: RangeInputLength | number) =>
    length ? { '--input-length': makeLength(length) } : {};

export const RangeInput: Component<RangeInputProps> = props => {
    const size = () => props.size || defaultProps.size;
    const length = () => props.length || defaultProps.length;

    const [localValue, setLocalValue] = createSignal<string | undefined>();
    const value = () => localValue() ?? (props.value || '0');
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

    const handlers = {
        onInput: handleInput,
        onFocus: handleFocus,
        onBlur: handleBlur,
        onKeyDown: handleKeyDown,
    };

    const classList = () => ({
        ...props.classList,
        RangeInput: true,
        'RangeInput-is-disabled': Boolean(props.disabled),
        'RangeInput-has-error': Boolean(props.error),
        'RangeInput-is-modified': isModified(),
        [`RangeInput-size-${size()}`]: true,
    });

    const style = () => makeStyle(length());

    return (
        <input
            id={props.id}
            type="range"
            min={String(props.min)}
            max={String(props.max)}
            step={props.step}
            value={value()}
            disabled={props.disabled}
            {...handlers}
            classList={classList()}
            style={style()}
        />
    );
};
