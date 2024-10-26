import { Component, JSX, createSignal } from 'solid-js';

import './NumberInput.css';

type NumberInputSize = 'xs' | 's' | 'm' | 'l' | 'xl';
type NumberInputLength = 's' | 'm' | 'l' | 'full' | 'auto';

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

    const [currentValue, setCurrentValue] = createSignal<string | undefined>();

    const handleInput: JSX.EventHandlerUnion<HTMLInputElement, InputEvent> = event => {
        const target = event.target as HTMLInputElement;
        const v = target?.value || '';
        setCurrentValue(v);
        props.onChangeValue?.(v);
    };

    const confirm = () => {
        props.onConfirmValue?.(currentValue() || props.value || '');
        setCurrentValue(undefined);
    };

    const cancel = () => {
        setCurrentValue(undefined);
        props.onCancelValue?.();
    };

    const handleFocus = () => {
        setCurrentValue(props.value);
    };

    const handleBlur = () => {
        if (props.autoConfirm) {
            confirm();
        } else {
            cancel();
        }
    };

    const handleKeyPress = (ev: KeyboardEvent) => {
        ev.stopPropagation();
    };

    const handleKeyDown = (ev: KeyboardEvent) => {
        ev.stopPropagation();
        if (ev.key === 'Escape') {
            cancel();
        } else if (ev.key === 'Enter') {
            confirm();
        } else if (currentValue() === undefined) {
            setCurrentValue(props.value);
        }
    };

    const handleKeyUp = (ev: KeyboardEvent) => {
        ev.stopPropagation();
    };

    const classList = () => ({
        ...props.classList,
        NumberInput: true,
        'NumberInput-is-disabled': Boolean(props.disabled),
        'NumberInput-has-error': Boolean(props.error),
        'NumberInput-is-modified': currentValue() !== undefined && currentValue() !== props.value,
        [`NumberInput-size-${size()}`]: true,
    });

    const style = () => makeStyle(length(), props.maxLength);

    return (
        <input
            id={props.id}
            value={currentValue() ?? (props.value || '')}
            type="number"
            placeholder={props.placeholder}
            min={props.min}
            max={props.max}
            step={props.step}
            disabled={props.disabled}
            onInput={handleInput}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onKeyPress={handleKeyPress}
            onKeyDown={handleKeyDown}
            onKeyUp={handleKeyUp}
            classList={classList()}
            style={style()}
        />
    );
};
