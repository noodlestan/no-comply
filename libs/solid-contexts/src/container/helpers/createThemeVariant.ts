import type { ThemeContextVariant } from '../contexts';

type ThemeVariantOptions = Partial<Omit<ThemeContextVariant, 'type'>> & { name: string };

export const createThemeVariant = (params: ThemeVariantOptions): ThemeContextVariant => {
	const { extend = [], mode = 'light', ...rest } = params;
	return { type: 'theme', extend, mode, ...rest };
};
