import type { AriaLabelledAPI, AriaLabelledProps } from '../label';
import type { AriaRegionAPI } from '../region';

export type AriaTreeItemProps = AriaLabelledProps & {
	selected: boolean;
	expanded: boolean;
	level: number;
	setSize: number;
	posInSet: number;
};

export type AriaTreeItemAPI = {
	$root: AriaRegionAPI<'treeitem'>['$root'] & {
		'aria-expanded': boolean;
		'aria-selected': boolean;
		'aria-level': number;
		'aria-setsize': number;
		'aria-posinset': number;
	};
	$label: AriaLabelledAPI['$label'];
	$description: AriaLabelledAPI['$description'];
};
