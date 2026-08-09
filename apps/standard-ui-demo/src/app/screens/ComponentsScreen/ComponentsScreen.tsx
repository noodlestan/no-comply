import { isNoComplyComponent } from '@no-comply/meta';
import { type ParentComponent } from 'solid-js';

import { useMeta } from '../../../providers';
import { capitalize } from '../../../utils';
import {
	SidebarNav,
	type SidebarNavGroup,
	createSidebarNavGroup,
	createSidebarNavItem,
	routeFor,
} from '../../navigation';
import { ScreenTemplateWithSidebar } from '../../templates';

export const ComponentsScreen: ParentComponent = props => {
	const { getEntities } = useMeta();

	const components = () => getEntities().filter(isNoComplyComponent);

	const sidebarNavItems = () => {
		const comps = components();
		const groups = comps.reduce(
			(acc, item) => {
				const groupName = capitalize(item.group);
				if (!acc[groupName]) {
					acc[groupName] = createSidebarNavGroup(groupName);
				}
				acc[groupName].items.push(createSidebarNavItem(item.name, routeFor.component(item.name)));
				return acc;
			},
			{} as Record<string, SidebarNavGroup>,
		);
		return Object.values(groups).sort((a, b) => a.title.localeCompare(b.title));
	};

	return (
		<ScreenTemplateWithSidebar id="components" sidebar={<SidebarNav items={sidebarNavItems()} />}>
			{props.children}
		</ScreenTemplateWithSidebar>
	);
};
