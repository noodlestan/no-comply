import {
	type ComponentEntityData,
	resolveComponentDeclaration,
	resolveComponentFactoryDeclaration,
} from '@no-comply/meta';
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
	const node = () => resolveComponentDeclaration(props.ent).node;

	return (
		<Show when={factory()}>
			<DocsSection title="Factory">
				<DocsItem gap="m">
					<CodeBlock
						lang={PurrceptionLanguageId}
						nodes={[factory() as FunctionDeclaration]}
						context={props.ent}
						padding
						inline
					/>
					<CodeDocDescription node={node()} />
				</DocsItem>
			</DocsSection>
		</Show>
	);
};
