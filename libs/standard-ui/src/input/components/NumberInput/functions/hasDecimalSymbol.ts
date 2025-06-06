export const hasDecimalSymbol = (value: string): boolean => {
	return value?.includes('.') || value?.includes(',');
};
