import { type Component, For } from 'solid-js';

import type { DocsSectionData } from '../../../types';
import { RenderDocsSection } from '../RenderDocsSection';

export type RenderDocsSectionsProps = {
	sections: DocsSectionData[];
};

export const RenderDocsSections: Component<RenderDocsSectionsProps> = props => {
	return (
		<For each={props.sections}>{section => <RenderDocsSection section={section} level={3} />}</For>
	);
};
