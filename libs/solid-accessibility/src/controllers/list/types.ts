import type { AriaAttributes } from '../../attributes';
import type { ListTagName } from '../../tag';
import type { AriaLabelledAPI, AriaLabelledProps } from '../label';

export type AriaListProps = AriaLabelledProps & {
	tag?: ListTagName;
	orientation?: 'vertical' | 'horizontal';
	multiselectable?: boolean;
};

export type AriaListAPI = {
	$root: AriaLabelledAPI['$root'] & {
		component: ListTagName;
		role: 'list' | undefined;
		'aria-orientation': AriaAttributes['aria-orientation'];
		'aria-multiselectable': AriaAttributes['aria-multiselectable'];
	};
	$label: AriaLabelledAPI['$label'];
	$description: AriaLabelledAPI['$description'];
};
