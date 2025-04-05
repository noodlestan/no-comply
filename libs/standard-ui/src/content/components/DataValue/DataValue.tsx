import { type ClassList, type PickRequired, createClassList } from '@noodlestan/context-ui-types';
import type { JSX, ParentComponent } from 'solid-js';

import styles from './DataValue.module.css';

export type DataValueSize = 'xs' | 's' | 'm' | 'l';
export type DataValueLength = 's' | 'm' | 'l' | 'full' | 'auto';
export type DataValueAlign = 'left' | 'right';

export type DataValueProps = {
    id?: string;
    size?: DataValueSize;
    length?: number | DataValueLength;
    align?: DataValueAlign;
    wrap?: boolean;
    onClick?: () => void;
    classList?: ClassList;
    value?: JSX.Element;
};

const defaultProps: PickRequired<DataValueProps, 'size' | 'length' | 'align'> = {
    size: 's',
    length: 'auto',
    align: 'left',
};

const makeLength = (length: number | DataValueLength): string => {
    if (typeof length === 'number') {
        return `${length * 0.63 + 0.5}em`;
    }
    if (length === 'auto') {
        return `min-content`;
    }
    if (length === 'full') {
        return '100%';
    }
    return `var(--data-value-length-${length})`;
};

const makeStyle = (length?: DataValueLength | number) =>
    length ? { '--data-value-length': makeLength(length) } : {};

export const DataValue: ParentComponent<DataValueProps> = props => {
    const size = () => props.size ?? defaultProps.size;
    const length = () => props.length ?? defaultProps.length;

    const handleClick = () => props.onClick?.();

    const handleKeyDown = (ev: KeyboardEvent) => {
        if (ev.key === 'Enter') {
            props.onClick?.();
        }
    };

    const tabindex = () => (props.onClick ? 0 : undefined);

    const classList = createClassList(
        styles,
        () => ({
            DataValue: true,
            [`DataValue-align-right`]: props.align === 'right',
            [`DataValue-is-interactive`]: Boolean(props.onClick),
            [`DataValue-size-${size()}`]: true,
            [`DataValue-wrap`]: !!props.wrap,
        }),
        () => props.classList,
    );

    const role = () => (props.onClick ? 'button' : undefined);

    const style = () => makeStyle(length());

    return (
        <div
            role={role()}
            onClick={handleClick}
            onKeyDown={handleKeyDown}
            tabIndex={tabindex()}
            classList={classList()}
            style={style()}
        >
            {props.value ?? props.children}
        </div>
    );
};
