import { type ComponentEntityData, resolveComponentFactoryDeclaration } from '@no-comply/meta';
import { PurrceptionLanguageId } from '@purrtrait/lang-ts';
import { type Component } from 'solid-js';

import { CodeBlock, CodeDocDescription } from '../../../../../components';
import { DocsItem, DocsSection } from '../../../../../content';

type Props = {
	ent: ComponentEntityData;
};

export const APIFactorySection: Component<Props> = props => {
	const factory = () => resolveComponentFactoryDeclaration(props.ent);

	return (
		<DocsSection title="Factory">
			<DocsItem gap="m">
				<CodeBlock lang={PurrceptionLanguageId} nodes={[factory()]} context={props.ent} />
				<CodeDocDescription node={resolveComponentFactoryDeclaration(props.ent)} />
			</DocsItem>
		</DocsSection>
	);
};
