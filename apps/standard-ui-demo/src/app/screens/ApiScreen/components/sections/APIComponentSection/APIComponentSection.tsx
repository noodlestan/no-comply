import type { ComponentEntityData } from '@no-comply/meta-entities';
import { TypeBlock } from '@purrtrait/solid-code';
import { type Component } from 'solid-js';

import { DocsSection } from '../../../../../content';

type Props = {
	ent: ComponentEntityData;
};

export const APIComponentSection: Component<Props> = props => {
	return (
		<DocsSection title="<Component>">
			<TypeBlock lang="ts" node={props.ent.component} />
		</DocsSection>
	);
};
