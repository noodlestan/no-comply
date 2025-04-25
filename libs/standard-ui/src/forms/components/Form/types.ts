import type { ClassList } from '@noodlestan/context-ui-primitives';
import type { FormAPI, FormProps as HeadlessFormProps } from '@noodlestan/headless-ui';
import type { JSX } from 'solid-js/jsx-runtime';

import type { ContentSize } from '../../../types';

export type FormProps = HeadlessFormProps & {
    size?: ContentSize;
    classList?: ClassList;
    children: (field: FormAPI) => JSX.Element;
};
