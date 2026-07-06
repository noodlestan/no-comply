import { type ParentComponent } from 'solid-js';

import { SidebarNav } from '../../navigation';
import { ScreenTemplateWithSidebar } from '../../templates';

import { RESOURCES_SIDEBAR_ITEMS } from './constants';

export const ResourcesScreen: ParentComponent = props => {
	return (
		<ScreenTemplateWithSidebar
			id="resources"
			sidebar={<SidebarNav items={RESOURCES_SIDEBAR_ITEMS} />}
		>
			{props.children}
		</ScreenTemplateWithSidebar>
	);
};
