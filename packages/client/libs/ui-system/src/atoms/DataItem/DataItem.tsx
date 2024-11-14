/* eslint-disable jsx-a11y/interactive-supports-focus */
import { Component, JSX, Show } from 'solid-js';

import { Label } from '../../forms';
import { Icon, IconComponent } from '../../icons';
import { DataValue, DataValueLength } from '../DataValue';

import './DataItem.css';

export type DataItemSize = 'xs' | 's' | 'm' | 'l';

export type DataItemProps = {
    id?: string;
    size?: DataItemSize;
    length?: number | DataValueLength;
    label?: string;
    units?: string;
    icon?: IconComponent | JSX.Element;
    onClick?: () => void;
    classList?: { [key: string]: boolean };
    children?: JSX.Element;
};

const defaultProps: Pick<DataItemProps, 'size'> = {
    size: 'm',
};

export const DataItem: Component<DataItemProps> = props => {
    const size = () => props.size || defaultProps.size;
    const icon = () => (typeof props.icon === 'function' ? props.icon({}) : props.icon);

    const handleKeyDown = (ev: KeyboardEvent) => {
        if (ev.key === 'Enter') {
            props.onClick?.();
        }
    };

    const classList = () => ({
        ...props.classList,
        DataItem: true,
        [`DataItem-size-${size()}`]: true,
    });

    const elementProps = (): JSX.HTMLAttributes<HTMLDivElement> => {
        if (props.onClick) {
            return {
                role: 'button',
                tabIndex: 0,
                onClick: props.onClick,
                onKeyDown: handleKeyDown,
            };
        }
        return {};
    };

    return (
        <div {...elementProps()} classList={classList()}>
            <Show when={props.icon}>
                <Icon icon={icon()} size={props.size} />
            </Show>
            <Show when={props.label}>
                <Label size={props.size}>{props.label}</Label>
            </Show>
            <DataValue
                align={props.units ? 'right' : 'left'}
                size={props.size}
                length={props.length}
                onClick={props.onClick}
            >
                {props.children}
            </DataValue>
            <Show when={props.units}>
                <Label size={props.size}>{props.units}</Label>
            </Show>
        </div>
    );
};
