import type { DemoItemProps } from '../../../../../components';

export const itemProps: Partial<DemoItemProps> = {
    padding: 'l',
    gap: 'm',
};

export const itemPropsStyled: Partial<DemoItemProps> = {
    ...itemProps,
    styled: true,
};
