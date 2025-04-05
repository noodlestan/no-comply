import type { ClassList, DataAttributes, Styles } from '@noodlestan/context-ui-types';
import type { ComponentProps } from 'solid-js';
import type { Dynamic } from 'solid-js/web';

import type { TagBaseProps } from './components';

export type TagProps = Omit<TagBaseProps, 'onClick'>;

export type ClosedTagProps = DataAttributes & {
    component: ComponentProps<typeof Dynamic>['component'];
    ref?: ComponentProps<typeof Dynamic>['ref'];
    classList?: ClassList;
    style?: Styles;
};
