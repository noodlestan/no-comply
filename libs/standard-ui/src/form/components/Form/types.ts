import type { ClassList } from '@noodlestan/context-ui-primitives';
import type { FormProps as HeadlessFormProps } from '@noodlestan/headless-ui';

import type { ContentSize } from '../../../types';

export type FormProps = HeadlessFormProps & {
    size?: ContentSize;
    classList?: ClassList;
};
