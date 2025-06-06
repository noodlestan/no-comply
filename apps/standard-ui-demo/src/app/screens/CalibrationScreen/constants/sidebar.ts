import { type SidebarItemGroup, routeFor } from '../../../navigation';

export const CALIBRATION_SIDEBAR_ITEMS: SidebarItemGroup[] = [
	{
		title: 'Space',
		items: [
			{
				title: 'Scales',
				route: routeFor.calibration('space/scales'),
			},
		],
	},
	{
		title: 'Typography',
		items: [
			{
				title: 'Variants',
				route: routeFor.calibration('typography/variants'),
			},
		],
	},
	{
		title: 'Color',
		items: [
			{
				title: 'Palettes',
				route: routeFor.calibration('color/palettes'),
			},
		],
	},
	{
		title: 'Composition',
		items: [
			{
				title: 'Large',
				route: routeFor.calibration('composition/large'),
			},
			{
				title: 'Medium',
				route: routeFor.calibration('composition/medium'),
			},
			{
				title: 'Small',
				route: routeFor.calibration('composition/small'),
			},
		],
	},
];
