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
    invalid?: boolean;
    onChangeValue?: (value: string) => void;
    onConfirmValue?: (value: string) => void;
    onCancelValue?: () => void;
    ref?: (el: HTMLInputElement) => void;
    classList?: { [key: string]: boolean };
};

const defaultProps: Pick<RangeInputProps, 'size' | 'length'> = {
    size: 's',
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

    const [wasTouched, setWasTouched] = createSignal<boolean>();
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

    const handleInput: JSX.EventHandlerUnion<HTMLInputElement, InputEvent> = event => {
        const target = event.target as HTMLInputElement;
        const v = target?.value || '';
        setLocalValue(v);
        props.onChangeValue?.(v);
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

    const handleKeyDown = (ev: KeyboardEvent) => {
        ev.stopImmediatePropagation();
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
        RangeInput: true,
        'RangeInput-is-disabled': Boolean(props.disabled),
        'RangeInput-is-invalid': Boolean(props.invalid),
        'RangeInput-is-modified': isModified() || props.modified,
        'RangeInput-is-touched': wasTouched(),
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
            value={currentValue()}
            disabled={props.disabled}
            {...handlers}
            ref={props.ref}
            classList={classList()}
            style={style()}
        />
    );
};
