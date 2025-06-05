import type { DemoItemProps } from '../../../../../content';

export const itemProps: Partial<DemoItemProps> = {
    row: true,
    gap: 'm',
    styled: true,
};

export const itemPropsOverflow: Partial<DemoItemProps> = {
    ...itemProps,
    padding: 'm',
    maxHeight: 'var(--scale-2xl)',
};

export const itemPropsStretch: Partial<DemoItemProps> = {
    ...itemProps,
    padding: 'm',
    align: 'start',
    minHeight: 'var(--scale-2xl)',
};
