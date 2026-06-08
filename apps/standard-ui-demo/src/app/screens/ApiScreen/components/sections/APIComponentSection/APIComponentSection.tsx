import { type ComponentEntityData, resolveComponentDeclaration } from '@no-comply/meta';
import { CodeBlock } from '@purrtrait/solid-code';
import { type Component } from 'solid-js';

import { DocsSection } from '../../../../../content';

type Props = {
	ent: ComponentEntityData;
};

export const APIComponentSection: Component<Props> = props => {
	const component = () => resolveComponentDeclaration(props.ent);

	return (
		<DocsSection title="Summary">
			<CodeBlock lang="ts" nodes={[component()]} context={props.ent} />
		</DocsSection>
	);
};
