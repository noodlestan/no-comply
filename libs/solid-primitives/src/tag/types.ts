import type { ClassList, DataAttributes, Styles } from '@no-comply/solid-primitives';
import type { ComponentProps, JSX } from 'solid-js';
import type { Dynamic } from 'solid-js/web';

type TagOwnProps = {
	id?: string;
	ref?: ComponentProps<typeof Dynamic>['ref'];
	classList?: ClassList;
	style?: Styles;
};

export type ClosedTagProps = DataAttributes & TagOwnProps;

export type PopoverTriggerTagProps = {
	popoverTarget?: string;
	popoverTargetAction?: 'show' | 'hide' | 'toggle';
};

export type TagComponentName = ComponentProps<typeof Dynamic>['component'];

export type OpenTagProps<T extends Element = Element> = Omit<
	JSX.HTMLAttributes<T>,
	'ref' | 'classList' | 'style'
> &
	TagOwnProps;
