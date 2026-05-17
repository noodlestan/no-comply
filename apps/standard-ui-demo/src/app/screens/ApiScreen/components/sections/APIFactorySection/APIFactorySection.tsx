import type { ComponentEntityData } from '@no-comply/meta-entities';
import { TypeBlock } from '@purrtrait/solid-code';
import { type Component } from 'solid-js';

import { DocsSection } from '../../../../../content';

type Props = {
	ent: ComponentEntityData;
};

export const APIFactorySection: Component<Props> = props => {
	return (
		<DocsSection title="Factory">
			<TypeBlock lang="ts" node={props.ent.factory} />
		</DocsSection>
	);
};
