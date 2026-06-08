import type { AriaAttributes } from '../../attributes';
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
		'aria-expanded': AriaAttributes['aria-expanded'];
		'aria-selected': AriaAttributes['aria-selected'];
		'aria-level': AriaAttributes['aria-level'];
		'aria-setsize': AriaAttributes['aria-setsize'];
		'aria-posinset': AriaAttributes['aria-posinset'];
	};
	$label: AriaLabelledAPI['$label'];
	$description: AriaLabelledAPI['$description'];
};
