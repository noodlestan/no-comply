import { type ComponentEntityData, resolveComponentFactoryDeclaration } from '@no-comply/meta';
import { CodeBlock } from '@purrtrait/solid-code';
import { type Component } from 'solid-js';

import { DocsSection } from '../../../../../content';

type Props = {
	ent: ComponentEntityData;
};

export const APIFactorySection: Component<Props> = props => {
	const factory = () => resolveComponentFactoryDeclaration(props.ent);

	return (
		<DocsSection title="Factory">
			<CodeBlock lang="ts" nodes={[factory()]} context={props.ent} />
		</DocsSection>
	);
};
