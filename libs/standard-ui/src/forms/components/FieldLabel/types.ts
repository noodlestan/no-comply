import type { ClassList } from '@noodlestan/context-ui-primitives';
import type {
    FieldLabelMixinAPI,
    FieldLabelAPI as HeadlessFieldLabelAPI,
    FieldLabelProps as HeadlessFieldLabelProps,
} from '@noodlestan/headless-ui';

import type { ContentSize } from '../../../types';

export type FieldLabelProps = HeadlessFieldLabelProps & {
    size?: ContentSize;
};

export type FieldLabelAPI = {
    $root: HeadlessFieldLabelAPI['$root'] &
        FieldLabelMixinAPI['$root'] & {
            classList: ClassList;
        };
};
