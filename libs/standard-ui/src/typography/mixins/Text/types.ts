import type { ClassList } from '@noodlestan/context-ui-primitives';
import type {
    TextMixinAPI as HeadlessTextMixinAPI,
    TextMixinProps as HeadlessTextMixinProps,
} from '@noodlestan/headless-ui';

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
