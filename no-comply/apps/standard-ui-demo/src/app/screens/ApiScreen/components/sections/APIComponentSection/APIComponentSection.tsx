import { type ComponentEntityData, resolveComponentDeclaration } from '@no-comply/meta';
import type { ComponentDeclaration } from '@purrception/lang-ts';
import { PurrceptionLanguageId } from '@purrtrait/lang-ts';
import { type Component } from 'solid-js';

import { CodeBlock, CodeDocDescription } from '../../../../../../modules/code/components';
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
				<CodeDocDescription node={node() as ComponentDeclaration['node']}>
					<CodeBlock
						lang={PurrceptionLanguageId}
						nodes={[component() as ComponentDeclaration]}
						context={props.ent}
						padding
					/>
				</CodeDocDescription>
				<CodeDocDescription node={node()} />
			</DocsItem>
		</DocsSection>
	);
};
