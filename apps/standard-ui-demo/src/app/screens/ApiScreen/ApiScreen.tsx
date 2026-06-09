/* eslint-disable dot-notation */
import { type ParentComponent } from 'solid-js';

import { SidebarNav } from '../../navigation';
import { ScreenTemplateWithSidebar } from '../../templates';

export const ApiScreen: ParentComponent = props => {
	const sidebarNavItems = () => [];

	return (
		<ScreenTemplateWithSidebar id="components" sidebar={<SidebarNav items={sidebarNavItems()} />}>
			{props.children}
		</ScreenTemplateWithSidebar>
	);
};
