import { type ComponentEntityData, resolveComponentDeclaration } from '@no-comply/meta';
import { PurrceptionLanguageId } from '@purrtrait/lang-ts';
import { type Component } from 'solid-js';

import { CodeBlock, CodeDocDescription } from '../../../../../components';
import { DocsItem, DocsSection } from '../../../../../content';

type Props = {
	ent: ComponentEntityData;
};

export const APIComponentSection: Component<Props> = props => {
	const component = () => resolveComponentDeclaration(props.ent);
	const node = () => resolveComponentDeclaration(props.ent).node;

	return (
		<DocsSection title="Function">
			<DocsItem gap="m">
				<CodeBlock
					lang={PurrceptionLanguageId}
					nodes={[component()]}
					context={props.ent}
					padding
					inline
				/>
				<CodeDocDescription node={node()} />
			</DocsItem>
		</DocsSection>
	);
};
