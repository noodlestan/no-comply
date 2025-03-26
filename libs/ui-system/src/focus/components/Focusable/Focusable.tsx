import { type Component, type JSX, createMemo, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import type { AriaRoleName } from '../../../aria';
import { Button, type ButtonElement, type ButtonProps } from '../../../atoms';
import { type ClassList, type DataAttributes } from '../../../dom';
import { type LabelValue, l } from '../../../labels';
import { mergeHandlerProps } from '../../../private';
import { createFocusContext } from '../../context';
import { createFocusable } from '../../controllers';
import type { FocusableAPI } from '../../types';

import './Focusable.css';

export type FocusableTag = 'div';

type FocusableLabels = {
    region: LabelValue;
};

type FocusableButtonProps = Pick<
    ButtonProps,
    'href' | 'disabled' | 'onShiftClick' | 'onAltClick' | 'onClick'
>;

export type FocusableProps = FocusableButtonProps & {
    focusable?: FocusableAPI;
    tag?: FocusableTag;
    role?: AriaRoleName;
    ref?: (el: ButtonElement) => void;
    classList?: ClassList;
    children?: JSX.Element;
    labels?: Partial<FocusableLabels>;
} & DataAttributes;

const LABELS: FocusableLabels = {
    region: `Details`,
};

const defaultProps: Pick<FocusableProps, 'tag'> = {
    tag: 'div',
};

export const Focusable: Component<FocusableProps> = props => {
    const [locals, buttonProps] = splitProps(props, [
        'labels',
        'tag',
        'disabled',
        'role',
        'focusable',
        'classList',
        'children',
    ]);

    const labels = () => Object.assign({}, LABELS, locals.labels);

    const tag = () => locals.tag || defaultProps.tag;

    const focusable = createMemo(() => {
        if (locals.focusable) {
            return locals.focusable;
        }
        return createFocusable(createFocusContext(), {
            role: locals.role,
            label: l(labels().region),
        });
    });

    const handleClick = (ev: MouseEvent) => {
        if (!props.href) {
            ev.preventDefault();
        }
        if (ev.shiftKey && props.onShiftClick) {
            props.onShiftClick?.(ev);
            return;
        }
        if (ev.altKey && props.onAltClick) {
            props.onAltClick?.(ev);
            return;
        }
        props.onClick?.(ev);
    };

    const classList = () => ({
        ...locals.classList,
        Focusable: true,
        'Focusable-is-disabled': locals.disabled,
        'Focusable-is-focused': focusable().isFocused(),
    });

    return (
        <Dynamic
            component={tag()}
            classList={classList()}
            {...focusable().containerProps()}
            onClick={handleClick}
        >
            <Button
                variant="transparent"
                {...buttonProps}
                classList={{ 'Focusable--button': true }}
                {...mergeHandlerProps(focusable().targetProps(), { ref: props.ref })}
            />
            {locals.children}
        </Dynamic>
    );
};
