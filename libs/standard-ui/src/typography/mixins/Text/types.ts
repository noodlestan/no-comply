import type {
    TextMixinAPI as HeadlessTextMixinAPI,
    TextMixinProps as HeadlessTextMixinProps,
} from '@no-comply/solid-composables';
import type { ClassList } from '@no-comply/solid-primitives';

import type { ContentSize } from '../../../types';

export type TextMixinProps = HeadlessTextMixinProps & {
    variant?: TextVariant;
};

export type TextVariant = ContentSize;

export type TextMixinAPI = {
    $root: HeadlessTextMixinAPI['$root'] & {
        classList: ClassList;
    };
};
