import { type ParentComponent } from 'solid-js';

import { SidebarNav } from '../../navigation';
import { ScreenTemplateWithSidebar } from '../../templates';

export const ApiScreen: ParentComponent = props => {
	const sideBarItems = () => [];
	return (
		<ScreenTemplateWithSidebar id="components" sidebar={<SidebarNav items={sideBarItems()} />}>
			{props.children}
		</ScreenTemplateWithSidebar>
	);
};
