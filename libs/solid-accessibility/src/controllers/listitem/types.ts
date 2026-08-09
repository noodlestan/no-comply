import type { ListItemTagName } from '../../tag';
import type { AriaLabelledAPI, AriaLabelledProps } from '../label';

export type AriaListItemProps = AriaLabelledProps & {
	tag?: ListItemTagName;
	selected: boolean;
	setSize: number;
	posInSet: number;
};

export type AriaListItemAPI = {
	$root: AriaLabelledAPI['$root'] & {
		component: ListItemTagName;
		role: 'listitem' | undefined;
		'aria-selected': boolean;
		'aria-setsize': number;
		'aria-posinset': number;
	};
	$label: AriaLabelledAPI['$label'];
	$description: AriaLabelledAPI['$description'];
};
