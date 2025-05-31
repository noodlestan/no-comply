import type { BaseMenuItemAPI } from './types';

export const createBaseMenuItem = (): BaseMenuItemAPI => {
    const labelProps = {
        variant: 'small',
        tag: 'span',
        aligned: true,
    } as const;

    const descriptionProps = {
        variant: 'small',
        tag: 'span',
    } as const;

    const iconProps = {
        aligned: true,
        size: 'small',
    } as const;

    return {
        labelProps,
        descriptionProps,
        iconProps,
    };
};
