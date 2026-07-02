import type {
	BaseInputAPI,
	NumberInputValueAPI,
	NumberInputValueProps,
} from '@no-comply/solid-composables';

import type { ContentLengthMixinAPI, ContentLengthMixinProps } from '../../../content';
import type {
	InputBoxMixinAPI,
	InputStateMixinAPI,
	InputStateMixinProps,
	SizedInputBoxMixinAPI,
	SizedInputBoxMixinProps,
} from '../../mixins';

export type NumberInputProps = InputStateMixinProps &
	NumberInputValueProps &
	SizedInputBoxMixinProps &
	ContentLengthMixinProps;

export type NumberInputAPI = {
	$root: BaseInputAPI['$root'] &
		NumberInputValueAPI['$root'] &
		InputBoxMixinAPI['$root'] &
		InputStateMixinAPI['$root'] &
		SizedInputBoxMixinAPI['$root'];
	value: NumberInputValueAPI['value'];
	wasTouched: NumberInputValueAPI['wasTouched'];
	size: SizedInputBoxMixinAPI['size'];
	length: ContentLengthMixinAPI['length'];
};
