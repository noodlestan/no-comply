import type { ClassList } from '@noodlestan/context-ui-primitives';
import type {
    TextMixinAPI as HeadlessTextMixinAPI,
    TextMixinProps as HeadlessTextMixinProps,
} from '@noodlestan/headless-ui';
import type { Accessor } from 'solid-js';

export type DisplayMixinProps = HeadlessTextMixinProps & {
    level?: DisplayMixinLevel;
    variant?: DisplayMixinVariant;
};

export type DisplayMixinLevel = 1 | 2 | 3 | 4 | 5;

export type DisplayMixinVariant = 'hero' | 'xl' | 'l' | 'm' | 's' | 'xs';

export type DisplayMixinAPI = {
    $root: HeadlessTextMixinAPI['$root'] & {
        classList: ClassList;
    };
    level: Accessor<DisplayMixinLevel>;
};
