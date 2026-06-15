import type { XPressViewExtracted } from '@purrtrait/view-tsx';
import type { Resource } from 'solid-js';

export type ExampleData = {
	name: string;
	description: string;
	tsx: string;
};

export type ParsedExample = {
	view: XPressViewExtracted;
};

export type ParsedExampleAPI = {
	data: ExampleData;
	parsed: Resource<ParsedExample | undefined>;
};
