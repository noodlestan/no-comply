import type { DocsItemProps } from '../../../types';

export const itemProps: Partial<DocsItemProps> = {
	row: true,
	gap: 'm',
	styled: true,
};

export const itemPropsOverflow: Partial<DocsItemProps> = {
	...itemProps,
	padding: 'm',
	maxHeight: 'var(--scale-2xl)',
};

export const itemPropsStretch: Partial<DocsItemProps> = {
	...itemProps,
	padding: 'm',
	align: 'start',
	minHeight: 'var(--scale-2xl)',
};
