import { type Accessor, type Setter, createSignal } from 'solid-js';

import { type DocsSectionProps } from '../../../components';
import type { DocsItemData, DocsSectionData } from '../../../types';
import type { RenderDocsSectionProps } from '../RenderDocsSection';
import type { DocsSectionAtionBarProps } from '../parts';

type RenderDocsSectionAPI = {
	_section: Accessor<Omit<DocsSectionProps, 'children'>>;
	_actionBar: Accessor<DocsSectionAtionBarProps>;
	isActionBarVisisble: Accessor<boolean>;
	itemsExpanded: Accessor<boolean | undefined>;
	setItemsExpanded: Setter<boolean | undefined>;
	currentIndex: Accessor<string>;
	setCurrentIndex: Setter<string>;
	visisibleItems: Accessor<DocsItemData[]>;
	hasCode: Accessor<boolean>;
	sections: Accessor<DocsSectionData[]>;
};

export const createRenderDocsSection = (props: RenderDocsSectionProps): RenderDocsSectionAPI => {
	const [itemsExpanded, setItemsExpanded] = createSignal<boolean>();
	const [currentIndex, setCurrentIndex] = createSignal<string>('0');

	const items = () => props.section.items.filter(item => item.type === 'item');

	const visisibleItems = () => {
		const current = currentIndex();
		return items().filter(
			(item, index) => !props.section.collapse || itemsExpanded() || current === String(index),
		);
	};

	const _section = () => ({
		...props.section.props,
		title: props.section.title,
	});

	const _actionBar = () => ({
		showItemSelector: Boolean(props.section.collapse && !itemsExpanded()),
		isExpanded: Boolean(itemsExpanded()),
		currentIndex: currentIndex(),
		items: items(),
		onToggleExpanded: () => setItemsExpanded(v => !v),
		onValueChange: setCurrentIndex,
	});

	const hasCode = () => Boolean(props.section.codeNode);

	const sections = () => props.section.items.filter(item => item.type === 'section');

	return {
		_section,
		_actionBar,
		isActionBarVisisble: () => Boolean(props.section.collapse),
		itemsExpanded,
		setItemsExpanded,
		currentIndex,
		setCurrentIndex,
		visisibleItems,
		hasCode,
		sections,
	};
};
