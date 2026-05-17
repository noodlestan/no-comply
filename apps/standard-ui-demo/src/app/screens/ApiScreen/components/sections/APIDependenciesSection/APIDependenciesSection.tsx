import type { ComponentEntityData } from '@no-comply/meta-entities';
import { type Component, For } from 'solid-js';

import { DocsSection } from '../../../../../content';

type Props = {
	ent: ComponentEntityData;
};

export const APIDependenciesSection: Component<Props> = props => {
	return (
		<DocsSection title="Dependencies">
			<ul>
				<For each={Object.values(props.ent.dependencies)}>{dep => <li>{dep.name}</li>}</For>
			</ul>
		</DocsSection>
	);
};
