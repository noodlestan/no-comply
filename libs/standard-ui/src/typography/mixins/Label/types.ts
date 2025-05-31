import type {
    TextMixinAPI as HeadlessTextMixinAPI,
    TextMixinProps as HeadlessTextMixinProps,
} from '@no-comply/solid-composables';
import type { ClassList } from '@no-comply/solid-primitives';

import type { LabelVariant } from '../../types';

export type LabelMixinProps = HeadlessTextMixinProps & {
    variant?: LabelVariant;
};

export type LabelMixinAPI = {
    $root: HeadlessTextMixinAPI['$root'] & {
        classList: ClassList;
    };
};
