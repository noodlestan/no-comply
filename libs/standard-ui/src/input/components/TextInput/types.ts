import type {
	BaseInputAPI,
	BaseInputProps,
	TextInputValueAPI,
	TextInputValueProps,
} from '@no-comply/solid-composables';

import type { ContentLengthMixinAPI, ContentLengthMixinProps } from '../../../content';
import type {
	InputBoxMixinAPI,
	InputStateMixinAPI,
	InputStateMixinProps,
	SizedInputBoxMixinAPI,
	SizedInputBoxMixinProps,
} from '../../mixins';

export type TextInputProps = BaseInputProps &
	TextInputValueProps &
	InputStateMixinProps &
	SizedInputBoxMixinProps &
	ContentLengthMixinProps;

export type TextInputAPI = {
	$root: BaseInputAPI['$root'] &
		TextInputValueAPI['$root'] &
		InputBoxMixinAPI['$root'] &
		InputStateMixinAPI['$root'] &
		SizedInputBoxMixinAPI['$root'];
	value: TextInputValueAPI['value'];
	wasTouched: TextInputValueAPI['wasTouched'];
	size: SizedInputBoxMixinAPI['size'];
	length: ContentLengthMixinAPI['length'];
	id: BaseInputAPI['id'];
};
