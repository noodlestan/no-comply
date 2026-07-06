export type ComponentExampleData = {
	title?: string;
	description?: string;
	lockedProps?: string[];
	tsx: string;
};

export type ComponentDocsData = {
	examples: ComponentExampleData[];
};
