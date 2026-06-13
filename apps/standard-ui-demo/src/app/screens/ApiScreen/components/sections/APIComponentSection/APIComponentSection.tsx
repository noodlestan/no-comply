import { type ComponentEntityData, resolveComponentDeclaration } from '@no-comply/meta';
import { CodeBlock } from '@purrtrait/solid-code';
import { type Component } from 'solid-js';

import { CodeDocDescription } from '../../../../../components';
import { DocsItem, DocsSection } from '../../../../../content';

type Props = {
	ent: ComponentEntityData;
};

export const APIComponentSection: Component<Props> = props => {
	const component = () => resolveComponentDeclaration(props.ent);

	return (
		<DocsSection title="Function">
			<DocsItem gap="m">
				<CodeBlock lang="ts" nodes={[component()]} context={props.ent} />
				<CodeDocDescription node={resolveComponentDeclaration(props.ent)} />
			</DocsItem>
		</DocsSection>
	);
};
