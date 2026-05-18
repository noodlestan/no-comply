import type { ProviderEntityData } from '@no-comply/meta-entities';
import { CodeBlock } from '@purrtrait/solid-code';
import { type Component, For, Show } from 'solid-js';

import { DocsSection } from '../../../../../content';

type Props = {
	ent: ProviderEntityData;
};

export const APIHooksSection: Component<Props> = props => {
	const show = () => props.ent.hooks.length > 0;
	return (
		<Show when={show()}>
			<DocsSection title="Hooks">
				<For each={props.ent.hooks}>
					{helper => (
						<DocsSection title={helper.name} level={4}>
							<CodeBlock lang="ts" nodes={[helper]} context={props.ent} />
						</DocsSection>
					)}
				</For>
			</DocsSection>
		</Show>
	);
};
