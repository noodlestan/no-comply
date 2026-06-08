import type {
	ComponentEntityData,
	ContextEntityData,
	ControllerEntityData,
	MixinEntityData,
	ModuleEntityData,
	ProviderEntityData,
	ServiceEntityData,
} from '@no-comply/meta';
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
	const publicTypes = () => types().filter(t => !t.private);
	const privateTypes = () => types().filter(t => t.private);

	return (
		<Show when={show()}>
			<Show when={publicTypes().length}>
				<DocsSection title="Types">
					<For each={publicTypes()}>
						{type => (
							<DocsSection title={type.name + (type.private ? ' (private)' : '')} level={4}>
								<DeclarationCodeBlock type={type} entity={props.ent} resolve="show" />
							</DocsSection>
						)}
					</For>
				</DocsSection>
			</Show>
			<Show when={privateTypes().length}>
				<DocsSection title="Private Types">
					<For each={privateTypes()}>
						{type => (
							<DocsSection
								label={type.name}
								title={type.name + (type.private ? ' (private)' : '')}
								level={4}
							>
								<DeclarationCodeBlock type={type} entity={props.ent} resolve="show" />
							</DocsSection>
						)}
					</For>
				</DocsSection>
			</Show>
		</Show>
	);
};
