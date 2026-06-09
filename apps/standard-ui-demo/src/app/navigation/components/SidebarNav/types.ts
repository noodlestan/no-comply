export type SidebarNavItem = {
	title: string;
	href: string;
};

export type SidebarNavGroup = {
	title: string;
	items: SidebarNavItem[];
};
