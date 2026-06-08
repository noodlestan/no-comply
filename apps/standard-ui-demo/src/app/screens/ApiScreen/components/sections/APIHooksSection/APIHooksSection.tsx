import type { ModuleEntityData } from '@no-comply/meta';
import { CodeBlock } from '@purrtrait/solid-code';
import { type Component, For, Show } from 'solid-js';

import { DocsSection } from '../../../../../content';

type Props = {
	ent: ModuleEntityData;
};

export const APIHelpersSection: Component<Props> = props => {
	const show = () => props.ent.helpers.length > 0;
	return (
		<Show when={show()}>
			<DocsSection title="Helpers">
				<For each={props.ent.helpers}>
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
