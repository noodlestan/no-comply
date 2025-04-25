import type { ClassList } from '@noodlestan/context-ui-primitives';
import type {
    FieldAPI,
    FieldMixinProps,
    FieldProps as HeadlessFieldProps,
} from '@noodlestan/headless-ui';
import type { JSX } from 'solid-js';

import type { ContentSize } from '../../../types';

export type FieldProps = HeadlessFieldProps &
    FieldMixinProps & {
        label: string;
        size?: ContentSize;
        classList?: ClassList;
        children: (field: FieldAPI) => JSX.Element;
    };
