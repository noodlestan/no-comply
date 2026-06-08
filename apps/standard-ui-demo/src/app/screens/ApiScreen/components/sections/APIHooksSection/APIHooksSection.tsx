import { type ProviderEntityData, getEntityFunctions } from '@no-comply/meta';
import { CodeBlock } from '@purrtrait/solid-code';
import { type Component, For, Show } from 'solid-js';

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
							<CodeBlock lang="ts" nodes={[hook]} context={props.ent} />
						</DocsSection>
					)}
				</For>
			</DocsSection>
		</Show>
	);
};
