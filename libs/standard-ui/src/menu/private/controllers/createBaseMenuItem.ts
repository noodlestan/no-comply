import type { BaseMenuItemAPI } from './types';

export const createBaseMenuItem = (): BaseMenuItemAPI => {
    const _label = {
        variant: 'small',
        tag: 'span',
        aligned: true,
    } as const;

    const _textDescription = {
        variant: 'small',
        tag: 'span',
    } as const;

    const _icon = {
        aligned: true,
        size: 'small',
    } as const;

    return {
        _label,
        _textDescription,
        _icon,
    };
};
