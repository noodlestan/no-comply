import { type ModuleEntityData, getEntityFunctions } from '@no-comply/meta';
import { PurrceptionLanguageId } from '@purrtrait/lang-ts';
import { type Component, For, Show } from 'solid-js';

import { CodeBlock } from '../../../../../components';
import { DocsSection } from '../../../../../content';

type Props = {
	ent: ModuleEntityData;
};

export const APIHelpersSection: Component<Props> = props => {
	const helpers = () => getEntityFunctions(props.ent, props.ent.helpers);
	const show = () => helpers().length > 0;

	return (
		<Show when={show()}>
			<DocsSection title="helpers">
				<For each={helpers()}>
					{helper => (
						<DocsSection title={helper.name} level={4}>
							<CodeBlock lang={PurrceptionLanguageId} nodes={[helper]} context={props.ent} />
						</DocsSection>
					)}
				</For>
			</DocsSection>
		</Show>
	);
};
