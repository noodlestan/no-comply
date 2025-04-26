import type { ClassList, DataAttributes, Styles } from '@noodlestan/context-ui-primitives';
import type { ComponentProps, JSX } from 'solid-js';
import type { Dynamic } from 'solid-js/web';

type TagOwnProps = {
    id?: string;
    ref?: ComponentProps<typeof Dynamic>['ref'];
    classList?: ClassList;
    style?: Styles;
};

export type OpenTagProps<T extends Element = Element> = Omit<
    JSX.HTMLAttributes<T>,
    'ref' | 'classList' | 'style'
> &
    TagOwnProps;

export type TagProps = Omit<OpenTagProps, 'onClick' | 'children'>;

export type ClosedTagProps = DataAttributes & TagOwnProps;

export type TagComponentName = ComponentProps<typeof Dynamic>['component'];
