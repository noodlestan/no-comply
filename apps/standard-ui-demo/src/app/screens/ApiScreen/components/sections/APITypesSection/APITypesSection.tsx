import type {
	ComponentEntityData,
	ContextEntityData,
	ControllerEntityData,
	MixinEntityData,
	ModuleEntityData,
	ProviderEntityData,
	ServiceEntityData,
} from '@no-comply/meta-entities';
import { CodeBlock } from '@purrtrait/solid-code';
import { type Component, For, Show } from 'solid-js';

import { DocsSection } from '../../../../../content';

type Props = {
	ent:
		| ComponentEntityData
		| ContextEntityData
		| ControllerEntityData
		| MixinEntityData
		| ModuleEntityData
		| ProviderEntityData
		| ServiceEntityData;
};

export const APITypesSection: Component<Props> = props => {
	const show = () => Object.keys(props.ent.types).length > 0;
	const types = () => Object.values(props.ent.types);

	return (
		<Show when={show()}>
			<DocsSection title="Types">
				<For each={types()}>
					{type => (
						<DocsSection title={type.name} level={4}>
							<CodeBlock lang="ts" nodes={[type]} context={props.ent} />
						</DocsSection>
					)}
				</For>
			</DocsSection>
		</Show>
	);
};
