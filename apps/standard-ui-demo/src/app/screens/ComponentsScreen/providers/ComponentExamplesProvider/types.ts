import type { TSXView } from '@purrtrait/view-tsx';
import type { Resource } from 'solid-js';

export type ComponentExampleData = {
	title?: string;
	description?: string;
	lockedProps?: string[];
	tsx: string;
};

export type ComponentDocsData = {
	preview: ComponentExampleData;
	examples: ComponentExampleData[];
};

export type ParsedExample = {
	view: TSXView;
};

export type ParsedExampleAPI = {
	data: ComponentExampleData;
	parsed: Resource<ParsedExample | undefined>;
};
