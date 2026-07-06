const convertToPixels = (element: HTMLElement, value: number, unit: string): number => {
	switch (unit) {
		case 'px':
			return value;
		case 'em':
			return value * parseFloat(getComputedStyle(element).fontSize);
		case '%':
			return (value / 100) * element.offsetWidth;
		case 'vw':
			return (value / 100) * window.innerWidth;
		case 'vh':
			return (value / 100) * window.innerHeight;
		default:
			throw new Error(`Unsupported unit: "${unit}"`);
	}
};

export const mediaQuerCriteriaToPixels = (
	element: HTMLElement,
	value: number | [number, string],
): number => {
	if (typeof value === 'number') {
		return value;
	}
	return convertToPixels(element, value[0], value[1]);
};
