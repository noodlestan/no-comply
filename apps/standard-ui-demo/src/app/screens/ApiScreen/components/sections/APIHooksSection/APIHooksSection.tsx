import { type ProviderEntityData, getEntityFunctions } from '@no-comply/meta';
import { PurrceptionLanguageId } from '@purrtrait/lang-ts';
import { type Component, For, Show } from 'solid-js';

import { CodeBlock } from '../../../../../components';
import { DocsSection } from '../../../../../content';

type Props = {
	ent: ProviderEntityData;
};

export const APIhooksSection: Component<Props> = props => {
	const hooks = () => getEntityFunctions(props.ent, props.ent.hooks);
	const show = () => hooks().length > 0;

	return (
		<Show when={show()}>
			<DocsSection title="hooks">
				<For each={hooks()}>
					{hook => (
						<DocsSection title={hook.name} level={4}>
							<CodeBlock lang={PurrceptionLanguageId} nodes={[hook]} context={props.ent} />
						</DocsSection>
					)}
				</For>
			</DocsSection>
		</Show>
	);
};
