import { type ComponentEntityData, resolveComponentFactoryDeclaration } from '@no-comply/meta';
import type { FunctionDeclaration } from '@purrception/lang-ts';
import { PurrceptionLanguageId } from '@purrtrait/lang-ts';
import { type Component, Show } from 'solid-js';

import { CodeBlock, CodeDocDescription } from '../../../../../components';
import { DocsItem, DocsSection } from '../../../../../content';

type Props = {
	ent: ComponentEntityData;
};

export const APIFactorySection: Component<Props> = props => {
	const factory = () => resolveComponentFactoryDeclaration(props.ent);

	return (
		<Show when={factory()}>
			<DocsSection title="Factory">
				<DocsItem gap="m">
					<CodeBlock
						lang={PurrceptionLanguageId}
						nodes={[factory() as FunctionDeclaration]}
						context={props.ent}
					/>
					<CodeDocDescription node={factory() as FunctionDeclaration} />
				</DocsItem>
			</DocsSection>
		</Show>
	);
};
