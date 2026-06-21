import type { TSXView } from '@purrtrait/view-tsx';

export type ComponentExampleData = {
	title?: string;
	description?: string;
	lockedProps?: string[];
	tsx: string;
};

export type ComponentDocsData = {
	examples: ComponentExampleData[];
};

export type ParsedExample = TSXView;

export type TargetPropsOverrides = Record<string, unknown>;
export type ExamplePropsOverrides = Record<string, TargetPropsOverrides>;
export type PropOverridesStore = Record<number, ExamplePropsOverrides>;
