import type { ComponentEntityData } from '@no-comply/meta-entities';
import type { TypeAliasData, TypeDeclarationData } from '@purrception/types-ts';
import type { JSX } from 'solid-js';

import type { DocsItemProps, DocsResponsiveItemProps, DocsSectionProps } from './components';

export type DocsPageData = {
	type: 'page';
	title: string;
	items: DocsSectionData[];
};

export type DocsComponentPageData = DocsPageData & {
	component: ComponentEntityData;
};

export type DocsSectionData = {
	type: 'section';
	collapse?: boolean;
	title: string;
	codeBlock?: TypeAliasData | TypeDeclarationData;
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
