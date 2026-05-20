import type {
	ComponentEntityData,
	ContextEntityData,
	ControllerEntityData,
	MixinEntityData,
	ModuleEntityData,
	ProviderEntityData,
	ServiceEntityData,
} from '@no-comply/meta-entities';
import { type Component, For, Show } from 'solid-js';

import { DeclarationCodeBlock } from '../../../../../components';
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
							<DeclarationCodeBlock type={type} entity={props.ent} resolve="show" />
						</DocsSection>
					)}
				</For>
			</DocsSection>
		</Show>
	);
};
