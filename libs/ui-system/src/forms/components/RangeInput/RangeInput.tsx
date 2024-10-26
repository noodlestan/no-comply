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

    const [currentValue, setCurrentValue] = createSignal<string | undefined>();

    const handleInput: JSX.EventHandlerUnion<HTMLInputElement, InputEvent> = event => {
        const target = event.target as HTMLInputElement;
        const v = target?.value || '';
        setCurrentValue(v);
        props.onChangeValue?.(v);
    };

    const confirm = () => {
        props.onConfirmValue?.(currentValue() ?? (props.value || ''));
        setCurrentValue(undefined);
    };

    const handleFocus = () => {
        setCurrentValue(props.value);
    };

    const handleBlur = () => {
        confirm();
    };

    const classList = () => ({
        ...props.classList,
        RangeInput: true,
        'RangeInput-is-disabled': Boolean(props.disabled),
        'RangeInput-has-error': Boolean(props.error),
        'RangeInput-is-modified': currentValue() !== undefined && currentValue() !== props.value,
        [`RangeInput-size-${size()}`]: true,
    });

    const style = () => makeStyle(length());

    return (
        <input
            id={props.id}
            value={currentValue() ?? (props.value || 0)}
            type="range"
            min={props.min}
            max={props.max}
            step={props.step}
            disabled={props.disabled}
            onInput={handleInput}
            onFocus={handleFocus}
            onBlur={handleBlur}
            classList={classList()}
            style={style()}
        />
    );
};
