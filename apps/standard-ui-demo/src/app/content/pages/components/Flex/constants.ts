import type { DocsItemProps } from '../../../types';

export const itemProps: Partial<DocsItemProps> = {
    row: true,
    styled: true,
    padding: 'l',
    gap: 'm',
};

export const itemPropsSized: Partial<DocsItemProps> = {
    ...itemProps,
    width: '280px',
};

export const itemPropsJustify: Partial<DocsItemProps> = {
    ...itemProps,
    row: false,
    align: 'stretch',
};

export const itemPropsBlock: Partial<DocsItemProps> = {
    ...itemProps,
    styles: { display: 'block' },
};
