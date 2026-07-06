import type { AriaLabelledAPI, AriaRadioGroupAPI } from '@no-comply/solid-accessibility';
import type { OptionGroupInputProps } from '@no-comply/solid-composables';
import type { Accessor } from 'solid-js';

import type { ContentSize } from '../../../size';
import type { SegmentedButtonContext, SegmentedButtonContextValue } from '../../contexts';
import type { SegmentedButtonMixinProps } from '../../mixins';

export type SegmentedButtonProps = OptionGroupInputProps & SegmentedButtonMixinProps;

export type SegmentedButtonAPI = {
	$root: AriaRadioGroupAPI['$root'];
	$label: AriaLabelledAPI['$label'];
	$description: AriaLabelledAPI['$description'];
	hasLabel: Accessor<boolean>;
	size: Accessor<ContentSize>;
	context: SegmentedButtonContext;
	contextValue: SegmentedButtonContextValue;
};
