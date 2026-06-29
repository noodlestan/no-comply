import {
	type SidebarNavGroup,
	createSidebarNavGroup,
	createSidebarNavItem,
	routeFor,
} from '../../../navigation';

export const RESOURCES_SIDEBAR_ITEMS: SidebarNavGroup[] = [
	createSidebarNavGroup('Space', [
		createSidebarNavItem('Scales', routeFor.resources('space/scales')),
	]),

	createSidebarNavGroup('Typography', [
		createSidebarNavItem('Variants', routeFor.resources('typography/variants')),
	]),

	createSidebarNavGroup('Color', [
		createSidebarNavItem('Palettes', routeFor.resources('color/palettes')),
	]),

	createSidebarNavGroup('Interactions', [
		createSidebarNavItem('States', routeFor.resources('interactions/states')),
		createSidebarNavItem('Inputs', routeFor.resources('interactions/inputs')),
	]),

	createSidebarNavGroup('Composition', [
		createSidebarNavItem('Size', routeFor.resources('composition/size')),
		createSidebarNavItem('Length', routeFor.resources('composition/length')),
		createSidebarNavItem('Large', routeFor.resources('composition/large')),
		createSidebarNavItem('Medium', routeFor.resources('composition/medium')),
		createSidebarNavItem('Small', routeFor.resources('composition/small')),
	]),
];
