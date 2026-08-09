import type { OptionGroupContext, OptionGroupContextValue } from '@no-comply/solid-composables';
import type { BaseContext } from '@no-comply/solid-contexts';
import type { Accessor } from 'solid-js';

import type { ContentSize } from '../../../size';

export type SegmentedButtonContextOptions = {
	size: ContentSize;
	optionGroupContextValue: OptionGroupContextValue;
};

export type SegmentedButtonContext = BaseContext & {
	type: 'segmented-button';
	optionGroupContext: Accessor<OptionGroupContext>;
	optionGroupContextValue: Accessor<OptionGroupContextValue>;
	size: Accessor<ContentSize>;
};

export type SegmentedButtonContextValue = [SegmentedButtonContext];
