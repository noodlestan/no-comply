import type { TextInputValueAPI, TextInputValueProps } from '@no-comply/solid-composables';

import type { ContentLengthMixinAPI, ContentLengthMixinProps } from '../../../content';
import type {
	InputBoxMixinAPI,
	InputBoxMixinProps,
	SizedInputBoxMixinAPI,
	SizedInputBoxMixinProps,
} from '../../mixins';

export type TextInputProps = TextInputValueProps &
	InputBoxMixinProps &
	SizedInputBoxMixinProps &
	ContentLengthMixinProps;

export type TextInputAPI = {
	$root: TextInputValueAPI['$root'] & InputBoxMixinAPI['$root'] & SizedInputBoxMixinAPI['$root'];
	value: TextInputValueAPI['value'];
	wasTouched: TextInputValueAPI['wasTouched'];
	size: SizedInputBoxMixinAPI['size'];
	length: ContentLengthMixinAPI['length'];
};
