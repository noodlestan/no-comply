import type { IconProps } from '../../../icon';

export type BaseMenuItemAPI = {
    _label: {
        variant: 'small';
        tag: 'span';
        aligned: true;
    };
    _textDescription: {
        variant: 'small';
        tag: 'span';
    };
    _icon: {
        size: NonNullable<IconProps['size']>;
        aligned: true;
    };
};
