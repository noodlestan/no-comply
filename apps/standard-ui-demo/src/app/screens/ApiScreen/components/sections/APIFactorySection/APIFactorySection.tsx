import type { ComponentEntityData } from '@no-comply/meta-entities';
import { CodeBlock } from '@purrtrait/solid-code';
import { type Component } from 'solid-js';

import { DocsSection } from '../../../../../content';

type Props = {
	ent: ComponentEntityData;
};

export const APIFactorySection: Component<Props> = props => {
	return (
		<DocsSection title="Factory">
			<CodeBlock lang="ts" nodes={[props.ent.factory]} context={props.ent} />
		</DocsSection>
	);
};
