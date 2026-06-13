import type { SidebarNavGroup, SidebarNavItem } from '../types';

export function createSidebarNavGroup(
	title: string,
	items: (SidebarNavItem | SidebarNavItem)[] = [],
): SidebarNavGroup {
	return {
		title,
		items,
	};
}
