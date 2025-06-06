import type { JSX } from 'solid-js';

import type { ComponentMetadata } from '../../../data';

import type { DocsItemProps, DocsResponsiveItemProps, DocsSectionProps } from './components';

export type DocsPageData = {
	type: 'page';
	title: string;
	items: DocsSectionData[];
};

export type DocsComponentPageData = DocsPageData & {
	component: ComponentMetadata;
};

export type DocsSectionData = {
	type: 'section';
	collapse?: boolean;
	title: string;
	props?: DocsSectionProps;
	items: (DocsSectionData | DocsItemData)[];
};

export type DocsItemData = {
	type: 'item';
	title?: string;
	props?: DocsItemProps;
	content: () => JSX.Element;
};

export type DocsResponsiveItemData = Omit<DocsItemData, 'props'> & {
	props: Omit<DocsResponsiveItemProps, 'bps'>;
};
