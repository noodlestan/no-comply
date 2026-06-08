import { COMPONENTS } from '../../../../data';
import type { SidebarItemGroup } from '../../../navigation/components';
import { routeFor } from '../../../navigation/routeFor';

const group = (name: string) => ({
	title: name,
	items: COMPONENTS.filter(c => c.group === name).map(({ name }) => ({
		title: name,
		route: routeFor.component(name),
	})),
});

export const COMPONENTS_SIDEBAR_ITEMS: SidebarItemGroup[] = [
	group('Actions'),
	group('Content'),
	group('Dialog'),
	group('Feedback'),
	group('Forms'),
	group('Layout'),
	group('Menus'),
	group('Navigation'),
	group('Popover'),
	group('Surface'),
	group('Typography'),
];
