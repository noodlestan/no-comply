import type { ListItemTagName } from '../../tag';
import type { AriaAttributes } from '../../types';
import type { AriaLabelledAPI, AriaLabelledProps } from '../label';

export interface AriaListItemProps extends AriaLabelledProps {
	tag?: ListItemTagName;
	selected: boolean;
	setSize: number;
	posInSet: number;
}

export interface AriaListItemAPI {
	$root: AriaLabelledAPI['$root'] & {
		component: ListItemTagName;
		role: 'listitem' | undefined;
		'aria-selected': AriaAttributes['aria-selected'];
		'aria-setsize': AriaAttributes['aria-setsize'];
		'aria-posinset': AriaAttributes['aria-posinset'];
	};
	$label: AriaLabelledAPI['$label'];
	$description: AriaLabelledAPI['$description'];
}
