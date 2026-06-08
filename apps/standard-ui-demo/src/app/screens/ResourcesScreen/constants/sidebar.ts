import { type SidebarItemGroup, routeFor } from '../../../navigation';

export const RESOURCES_SIDEBAR_ITEMS: SidebarItemGroup[] = [
	{
		title: 'Space',
		items: [
			{
				title: 'Scales',
				route: routeFor.resources('space/scales'),
			},
		],
	},
	{
		title: 'Typography',
		items: [
			{
				title: 'Variants',
				route: routeFor.resources('typography/variants'),
			},
		],
	},
	{
		title: 'Color',
		items: [
			{
				title: 'Palettes',
				route: routeFor.resources('color/palettes'),
			},
		],
	},
	{
		title: 'Composition',
		items: [
			{
				title: 'Large',
				route: routeFor.resources('composition/large'),
			},
			{
				title: 'Medium',
				route: routeFor.resources('composition/medium'),
			},
			{
				title: 'Small',
				route: routeFor.resources('composition/small'),
			},
		],
	},
];
