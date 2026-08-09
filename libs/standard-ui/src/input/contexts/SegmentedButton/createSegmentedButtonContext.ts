import type {
	SegmentedButtonContext,
	SegmentedButtonContextOptions,
	SegmentedButtonContextValue,
} from './types';

export const createSegmentedButtonContext = (
	options: SegmentedButtonContextOptions,
): SegmentedButtonContextValue => {
	const context: SegmentedButtonContext = {
		type: 'segmented-button',
		size: () => options.size,
		optionGroupContext: () => options.optionGroupContextValue[0],
		optionGroupContextValue: () => options.optionGroupContextValue,
	};

	return [context];
};
