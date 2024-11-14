import { Component, JSX } from 'solid-js';

import './DataValue.css';

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
    classList?: { [key: string]: boolean };
    children?: JSX.Element;
};

const defaultProps: Pick<DataValueProps, 'size' | 'length' | 'align'> = {
    size: 'm',
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

export const DataValue: Component<DataValueProps> = props => {
    const size = () => props.size || defaultProps.size;
    const length = () => props.length || defaultProps.length;

    const handleClick = () => props.onClick?.();

    const handleKeyDown = (ev: KeyboardEvent) => {
        if (ev.key === 'Enter') {
            props.onClick?.();
        }
    };

    const tabindex = () => (props.onClick ? 0 : undefined);

    const classList = () => ({
        ...props.classList,
        DataValue: true,
        [`DataValue-align-right`]: props.align === 'right',
        [`DataValue-is-interactive`]: Boolean(props.onClick),
        [`DataValue-size-${size()}`]: true,
        [`DataValue-wrap`]: !!props.wrap,
    });

    const role = () => (props.onClick ? 'button' : undefined);

    const style = () => makeStyle(length());

    return (
        <div
            role={role()}
            onClick={handleClick}
            onKeyDown={handleKeyDown}
            tabindex={tabindex()}
            classList={classList()}
            style={style()}
        >
            {props.children}
        </div>
    );
};
