import type { AriaLabelledAPI, AriaLabelledProps } from '../label';
import type { AriaRegionAPI } from '../region';

export type AriaDialogProps = AriaLabelledProps;

export type AriaDialogAPI = {
	$root: AriaRegionAPI<'dialog'>['$root'];
	$label: AriaLabelledAPI['$label'];
	$description: AriaLabelledAPI['$description'];
};
