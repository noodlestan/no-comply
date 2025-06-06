import type { DocsItemProps } from '../../../types';

export const itemProps: Partial<DocsItemProps> = {
    padding: 'l',
    gap: 'm',
};

export const itemPropsStyled: Partial<DocsItemProps> = {
    ...itemProps,
    styled: true,
};
