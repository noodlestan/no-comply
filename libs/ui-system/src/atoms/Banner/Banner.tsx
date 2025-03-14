import { AlertTriangleIcon, InfoIcon, ThumbsUpIcon, XCircleIcon } from 'lucide-solid';
import { Component, JSX } from 'solid-js';

import { createClassListMapper, mapClassName } from '../../functions';
import { Icon } from '../../icons';
import { Surface } from '../../surface';

import styles from './Banner.module.css';

export type BannerVariant = 'passive' | 'info' | 'warning' | 'danger' | 'success';
export type BannerSize = 's' | 'm';
export type BannerLength = 'compact' | 'full';

const VARIANT_ICON_MAP: Record<BannerVariant, Component> = {
    passive: InfoIcon,
    info: InfoIcon,
    warning: AlertTriangleIcon,
    danger: XCircleIcon,
    success: ThumbsUpIcon,
};

export type BannerProps = {
    variant?: BannerVariant;
    size?: BannerSize;
    length?: BannerLength;
    ref?: (el: Element) => void;
    classList?: { [key: string]: boolean };
    children?: JSX.Element;
};

const defaultProps: Pick<BannerProps, 'variant' | 'size' | 'length'> = {
    variant: 'passive',
    size: 'm',
    length: 'full',
};

export const Banner: Component<BannerProps> = props => {
    const variant = () => props.variant || defaultProps.variant;
    const size = () => props.size || defaultProps.size;
    const length = () => props.length || defaultProps.length;
    const svg = () => VARIANT_ICON_MAP[(variant && variant()) || 'passive'];

    const localClasses = createClassListMapper(styles, () => ({
        Banner: true,
        [`Banner--Surface`]: true,
        [`Banner-variant-${variant()}`]: true,
        [`Banner-size-${size()}`]: true,
        [`Banner-length-${length()}`]: true,
    }));

    const classList = () => ({
        ...props.classList,
        ...localClasses(),
    });

    return (
        <Surface variant="banner" classList={classList()} ref={props.ref}>
            <div class={mapClassName(styles, 'Banner--Contents')}>
                <Icon size={size()} icon={svg()} />
                {props.children}
            </div>
        </Surface>
    );
};
