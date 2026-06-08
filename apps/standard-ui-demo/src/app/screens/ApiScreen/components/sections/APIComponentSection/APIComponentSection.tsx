import type { ComponentEntityData } from '@no-comply/meta';
import { CodeBlock } from '@purrtrait/solid-code';
import { type Component } from 'solid-js';

import { DocsSection } from '../../../../../content';

type Props = {
	ent: ComponentEntityData;
};

export const APIComponentSection: Component<Props> = props => {
	return (
		<DocsSection title="Summary">
			<CodeBlock lang="ts" nodes={[props.ent.component]} context={props.ent} />
		</DocsSection>
	);
};
