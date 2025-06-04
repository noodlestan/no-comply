import type { DemoItemProps } from '../../../../../content';

export const itemProps: Partial<DemoItemProps> = {
    padding: 'l',
    gap: 'm',
};

export const itemPropsStyled: Partial<DemoItemProps> = {
    ...itemProps,
    styled: true,
};
