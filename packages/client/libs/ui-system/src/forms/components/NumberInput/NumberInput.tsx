import { Component, JSX, createSignal } from 'solid-js';

import { VALID_KEYS } from './constants';
import {
    calcStepMultiplier,
    getValueRounded,
    hasDecimalSymbol,
    isDecimalSymbol,
    isNumberSymbol,
    isTextEditingShortcut,
    makeStyle,
} from './functions';
import { NumberInputLength, NumberInputSize } from './types';

import './NumberInput.css';

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
    invalid?: boolean;
    onChangeValue?: (value: string) => void;
    onConfirmValue?: (value: string) => void;
    onCancelValue?: () => void;
    ref?: (el: HTMLInputElement) => void;
    classList?: { [key: string]: boolean };
};

const defaultProps: Pick<NumberInputProps, 'size' | 'length'> = {
    size: 's',
    length: 'auto',
};

export const NumberInput: Component<NumberInputProps> = props => {
    let inputRef: HTMLInputElement;

    const size = () => props.size || defaultProps.size;
    const length = () => props.length || defaultProps.length;

    const [, setWasTouched] = createSignal<boolean>();
    const [localValue, setLocalValue] = createSignal<string | undefined>();

    const currentValue = () => {
        const local = localValue();
        return local !== undefined ? local : props.value || '';
    };

    const isModified = () => {
        const local = localValue();
        return local !== undefined && local !== props.value;
    };

    const confirm = () => {
        if (isModified() || props.modified) {
            props.onConfirmValue?.(currentValue());
            setLocalValue(undefined);
        }
    };

    const cancel = () => {
        setLocalValue(undefined);
        props.onCancelValue?.();
    };

    const updateLocalValue = (value: string) => {
        setLocalValue(value);
        props.onChangeValue?.(value);
    };

    const handleInput: JSX.EventHandlerUnion<HTMLInputElement, InputEvent> = event => {
        const target = event.target as HTMLInputElement;
        const v = target?.value || '';
        updateLocalValue(v);
    };

    const handleFocus = () => {
        setWasTouched(true);
    };

    const handleBlur = () => {
        if (props.autoConfirm) {
            confirm();
        } else {
            cancel();
        }
    };

    const setInputRef = (ref: HTMLInputElement) => {
        inputRef = ref;
        props.ref?.(ref);
    };

    const isCaretAtStart = () => {
        return inputRef.selectionStart === 0;
    };

    const canNotTypeMinus = (value: string) => {
        return !isCaretAtStart() || value?.includes('-');
    };

    const clampedValue = (incremented: number) => {
        const min = props.min ?? -Infinity;
        const max = props.max ?? Infinity;
        return Math.min(max, Math.max(min, incremented));
    };

    const incrementValue = (value: number, by: number) => {
        const incremented = getValueRounded(value + by);
        const clamped = clampedValue(incremented);
        updateLocalValue(clamped.toString());
    };

    const decrementValue = (value: number, by: number) => {
        const decremented = getValueRounded(value - by);
        const clamped = clampedValue(decremented);
        updateLocalValue(clamped.toString());
    };

    const handleInputKey = (ev: KeyboardEvent) => {
        if (isTextEditingShortcut(ev)) {
            return;
        }

        const value = currentValue();
        const step = props.step ?? 1;
        const multiplier = calcStepMultiplier(ev, step);

        if (!VALID_KEYS.includes(ev.key) && !isNumberSymbol(ev.key)) {
            ev.preventDefault();
        }
        if (isDecimalSymbol(ev.key) && hasDecimalSymbol(value)) {
            ev.preventDefault();
        }
        if (ev.key === '-' && canNotTypeMinus(value)) {
            ev.preventDefault();
        }
        if (value.includes('-') && isCaretAtStart() && ev.key !== 'ArrowRight') {
            ev.preventDefault();
        }

        if (ev.key === 'ArrowUp') {
            const val = Number(value);
            if (!isNaN(val)) {
                incrementValue(val, multiplier);
            }
        }
        if (ev.key === 'ArrowDown') {
            const val = Number(value);
            if (!isNaN(val)) {
                decrementValue(val, multiplier);
            }
        }
    };

    const handleKeyDown = (ev: KeyboardEvent) => {
        ev.stopImmediatePropagation();
        handleInputKey(ev);
        if (ev.key === 'Enter') {
            confirm();
        } else if (ev.key === 'Escape') {
            cancel();
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
        'NumberInput-is-invalid': Boolean(props.invalid),
        'NumberInput-is-modified': isModified() || props.modified,
        [`NumberInput-size-${size()}`]: true,
    });

    const style = () => makeStyle(length(), props.maxLength);

    return (
        <input
            id={props.id}
            type="text"
            inputMode="decimal"
            pattern="[0-9]"
            placeholder={props.placeholder}
            min={props.min}
            max={props.max}
            step={props.step}
            value={currentValue()}
            disabled={props.disabled}
            {...handlers}
            ref={setInputRef}
            classList={classList()}
            style={style()}
        />
    );
};
