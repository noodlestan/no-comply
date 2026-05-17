import type { ComponentEntityData } from '@no-comply/meta-entities';
import { type Component, For } from 'solid-js';

import { DocsSection } from '../../../../../content';

type Props = {
	ent: ComponentEntityData;
};

export const APITypesSection: Component<Props> = props => {
	return (
		<DocsSection title="Dependencies">
			<ul>
				<For each={Object.values(props.ent.types)}>{type => <li>{type.name}</li>}</For>
			</ul>
		</DocsSection>
	);
};
