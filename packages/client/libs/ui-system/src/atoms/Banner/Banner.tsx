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

/**
 * A customizable Banner component.
 *
 * @remarks
 * This component can be use to show important information.
 *
 * @example
 * ```tsx
 * <Banner variant="info" size="s" lenght="compact">
 *  <BannerContents />
 * <Banner>
 * ```
 * @param {('variant'|'size'|'length'| 'ref'|'classList'| 'children')} props - The component props.
 * @param {('passive' | 'info' | 'warning' | 'danger' | 'success')} [props.variant='passive'] - The style variant of the banner.
 * @param {('s'|'m'|)} [props.size='m'] - The size the banner.
 * @param {('compact'|'full')} props.lenght - Function to handle click events.
 * @param {(el: HTMLButtonElement) => void} [props.ref] - A ref callback to access the underlying banner.
 * @param {Record<string, boolean>} [props.classList] - Additional custom class names for the banner.
 * @param {JSX.Element | JSX.Element[]} [props.children] - Slot content for the banner
 *
 * @group Banner
 * @returns {JSX.Element}
 *
 * @see {@link https://noodlestan.example.com/components/banner | Design Guidelines}
 */
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
