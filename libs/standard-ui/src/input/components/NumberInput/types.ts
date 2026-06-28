import type { NumberInputValueAPI, NumberInputValueProps } from '@no-comply/solid-composables';

import type { ContentLengthMixinAPI, ContentLengthMixinProps } from '../../../content';
import type {
	InputBoxMixinAPI,
	InputBoxMixinProps,
	SizedInputBoxMixinAPI,
	SizedInputBoxMixinProps,
} from '../../mixins';

export type NumberInputProps = NumberInputValueProps &
	InputBoxMixinProps &
	SizedInputBoxMixinProps &
	ContentLengthMixinProps;

export type NumberInputAPI = {
	$root: NumberInputValueAPI['$root'] & InputBoxMixinAPI['$root'] & SizedInputBoxMixinAPI['$root'];
	value: NumberInputValueAPI['value'];
	wasTouched: NumberInputValueAPI['wasTouched'];
	size: SizedInputBoxMixinAPI['size'];
	length: ContentLengthMixinAPI['length'];
};
