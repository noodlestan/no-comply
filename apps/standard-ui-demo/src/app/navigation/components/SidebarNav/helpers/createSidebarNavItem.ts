import type { SidebarNavItem } from '../types';

export function createSidebarNavItem(title: string, href: string): SidebarNavItem {
	return {
		title,
		href,
	};
}
