import type {
    TextMixinAPI as HeadlessTextMixinAPI,
    TextMixinProps as HeadlessTextMixinProps,
} from '@no-comply/solid-composables';
import type { ClassList } from '@no-comply/solid-primitives';

import type { ContentSize } from '../../../types';

export type LabelMixinProps = HeadlessTextMixinProps & {
    size?: ContentSize;
};

export type LabelMixinVariant = ContentSize;

export type LabelMixinAPI = {
    $root: HeadlessTextMixinAPI['$root'] & {
        classList: ClassList;
    };
};
