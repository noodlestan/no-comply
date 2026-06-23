import type { AriaAttributeOrientation } from '../../attributes';
import type { ListTagName } from '../../tag';
import type { AriaLabelledAPI, AriaLabelledProps } from '../label';

export type AriaListProps = AriaLabelledProps & {
	tag?: ListTagName;
	orientation?: AriaAttributeOrientation;
	multiselectable?: boolean;
};

export type AriaListAPI = {
	$root: AriaLabelledAPI['$root'] & {
		component: ListTagName;
		role: 'list' | undefined;
		'aria-orientation': AriaAttributeOrientation;
		'aria-multiselectable': boolean;
	};
	$label: AriaLabelledAPI['$label'];
	$description: AriaLabelledAPI['$description'];
};
