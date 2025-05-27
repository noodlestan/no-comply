import type { ClassList } from '@noodlestan/context-ui-primitives';
import type {
    TextMixinAPI as HeadlessTextMixinAPI,
    TextMixinProps as HeadlessTextMixinProps,
} from '@noodlestan/headless-ui';

import type { ContentSize } from '../../../types';

export type ActionLabelMixinProps = HeadlessTextMixinProps & {
    size?: ContentSize;
};

export type ActionLabelMixinAPI = {
    $root: HeadlessTextMixinAPI['$root'] & {
        classList: ClassList;
    };
};
