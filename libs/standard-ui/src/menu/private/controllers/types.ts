import type { IconProps } from '../../../icon';

export type BaseMenuItemAPI = {
    labelProps: {
        variant: 'small';
        tag: 'span';
        aligned: true;
    };
    descriptionProps: {
        variant: 'small';
        tag: 'span';
    };
    iconProps: {
        size: NonNullable<IconProps['size']>;
        aligned: true;
    };
};
