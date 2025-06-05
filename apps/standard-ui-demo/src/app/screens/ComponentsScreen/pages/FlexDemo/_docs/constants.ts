import type { DemoItemProps } from '../../../../../content';

export const itemProps: Partial<DemoItemProps> = {
    row: true,
    styled: true,
    padding: 'l',
    gap: 'm',
};

export const itemPropsSized: Partial<DemoItemProps> = {
    ...itemProps,
    width: '280px',
};

export const itemPropsJustify: Partial<DemoItemProps> = {
    ...itemProps,
    row: false,
    align: 'stretch',
};

export const itemPropsBlock: Partial<DemoItemProps> = {
    ...itemProps,
    styles: { display: 'block' },
};
