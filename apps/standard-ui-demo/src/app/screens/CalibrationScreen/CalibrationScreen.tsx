import { type ParentComponent } from 'solid-js';

import { SidebarNav } from '../../navigation';
import { ScreenTemplateWithSidebar } from '../../templates';

import { CALIBRATION_SIDEBAR_ITEMS } from './constants';

export const CalibrationScreen: ParentComponent = props => {
	return (
		<ScreenTemplateWithSidebar
			id="calibration"
			sidebar={<SidebarNav items={CALIBRATION_SIDEBAR_ITEMS} />}
		>
			{props.children}
		</ScreenTemplateWithSidebar>
	);
};
