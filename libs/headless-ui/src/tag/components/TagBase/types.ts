import type { ClassList, Styles } from '@noodlestan/context-ui-types';
import type { ComponentProps, JSX } from 'solid-js';
import { Dynamic } from 'solid-js/web';

export type TagBaseProps<T extends Element = Element> = Omit<JSX.HTMLAttributes<T>, 'style'> & {
    component: ComponentProps<typeof Dynamic>['component'];
    ref?: ComponentProps<typeof Dynamic>['ref'];
    classList?: ClassList;
    style?: Styles;
};
