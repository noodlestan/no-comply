import { type SidebarNavGroup, routeFor } from '../../../navigation';

export const APP_SIDEBAR_ITEMS: SidebarNavGroup[] = [
	{
		title: 'Todo',
		items: [
			{
				title: 'Scales',
				href: routeFor.showcase(''),
			},
		],
	},
	{
		title: 'Archived',
		items: [
			{
				title: 'Category 1',
				href: routeFor.home(),
			},
			{
				title: 'Category 2',
				href: routeFor.home(),
			},
		],
	},
	{
		title: 'Settings',
		items: [
			{
				title: 'Display',
				href: routeFor.home(),
			},
		],
	},
];
