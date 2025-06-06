import { type DisplayLevel } from '@no-comply/standard-ui';
import { type Component, For, Show } from 'solid-js';

import type { DocsSectionData } from '../../../types';
import { DocsSection } from '../../components';
import { RenderDocsItem } from '../RenderDocsItem';

import { DocsSectionActionBar } from './parts';
import { createRenderDocsSection } from './private';

export type RenderDocsSectionProps = {
	section: DocsSectionData;
	level: DisplayLevel;
};

export const RenderDocsSection: Component<RenderDocsSectionProps> = props => {
	const { _section, _actionBar, isActionBarVisisble, visisibleItems, sections } =
		createRenderDocsSection(props);

	return (
		<DocsSection {..._section()}>
			<Show when={isActionBarVisisble()}>
				<DocsSectionActionBar {..._actionBar()} />
			</Show>
			<For each={visisibleItems()}>
				{item => <RenderDocsItem item={item} level={(props.level + 1) as DisplayLevel} />}
			</For>
			<For each={sections()}>
				{section => (
					<RenderDocsSection section={section} level={(props.level + 1) as DisplayLevel} />
				)}
			</For>
		</DocsSection>
	);
};
