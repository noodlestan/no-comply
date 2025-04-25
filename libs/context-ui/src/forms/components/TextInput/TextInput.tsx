import type { ClassList, PickRequired } from '@noodlestan/context-ui-primitives';
import { type Component, type JSX, createSignal } from 'solid-js';

import './TextInput.css';

export type TextInputSize = 'xs' | 's' | 'm' | 'l' | 'xl';
export type TextInputLength = 's' | 'm' | 'l' | 'full' | 'auto';

export type InputControllerProps<T> = {
    value?: T;
    onChangeValue?: (value: T) => void;
};

export type TextInputProps = InputControllerProps<string> & {
    id?: string;
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
    invalid?: boolean;
    ref?: (el: HTMLInputElement) => void;
    classList?: ClassList;
};

const defaultProps: PickRequired<TextInputProps, 'size' | 'length'> = {
    size: 's',
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
    const size = () => props.size ?? defaultProps.size;
    const length = () => props.length ?? defaultProps.length;

    const [wasTouched, setWasTouched] = createSignal<boolean>();
    const [localValue, setLocalValue] = createSignal<string | undefined>();

    const currentValue = () => {
        const local = localValue();
        return local !== undefined ? local : (props.value ?? '');
    };

    const isModified = () => {
        const local = localValue();
        return local !== undefined && local !== props.value;
    };

    // const confirm = () => {
    //     if (isModified() || props.modified) {
    //         props.onConfirmValue?.(currentValue());
    //         setLocalValue(undefined);
    //     }
    // };

    // const cancel = () => {
    //     setLocalValue(undefined);
    //     props.onCancelValue?.();
    // };

    const handleInput: JSX.EventHandlerUnion<HTMLInputElement, InputEvent> = event => {
        const target = event.target as HTMLInputElement;
        const v = target?.value ?? '';
        setLocalValue(v);
        props.onChangeValue?.(v);
    };

    const handleFocus = () => {
        setWasTouched(true);
    };

    // const handleBlur = () => {
    //     if (props.autoConfirm) {
    //         confirm();
    //     } else {
    //         cancel();
    //     }
    // };

    const handleKeyDown = (ev: KeyboardEvent) => {
        ev.stopImmediatePropagation();
        // if (event.key === 'Enter') {
        //     confirm();
        // } else if (event.key === 'Escape') {
        //     cancel();
        // }
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
        // onBlur: handleBlur,
        onKeyDown: handleKeyDown,
        onKeyUp: handleKeyUp,
        onKeyPress: handleKeyPress,
    };

    const classList = () => ({
        ...props.classList,
        TextInput: true,
        'TextInput-is-disabled': props.disabled,
        'TextInput-is-invalid': Boolean(props.invalid),
        'TextInput-is-modified': isModified() || props.modified,
        'TextInput-was-touched': wasTouched(),
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
            value={currentValue()}
            disabled={props.disabled}
            {...handlers}
            ref={props.ref}
            classList={classList()}
            style={style()}
        />
    );
};
