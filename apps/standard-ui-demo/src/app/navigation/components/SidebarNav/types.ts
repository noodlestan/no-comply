export type SidebarItem = {
	title: string;
	route: string;
};

export type SidebarItemGroup = {
	title: string;
	items: SidebarItem[];
};
