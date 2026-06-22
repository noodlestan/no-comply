import {
	type ComponentEntityData,
	type ContextEntityData,
	type ControllerEntityData,
	type MixinEntityData,
	type ModuleEntityData,
	type ProviderEntityData,
	type ServiceEntityData,
	getEntityTypes,
} from '@no-comply/meta';
import { type Component, For, Show } from 'solid-js';

import { CodeDeclaration, CodeDocDescription } from '../../../../../components';
import { DocsItem, DocsSection } from '../../../../../content';

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
	const types = () => getEntityTypes(props.ent);
	const show = () => types().length > 0;
	const publicTypes = () => types().filter(t => !t.private);
	const privateTypes = () => types().filter(t => t.private);

	return (
		<Show when={show()}>
			<Show when={publicTypes().length}>
				<DocsSection title="Types">
					<For each={publicTypes()}>
						{type => (
							<DocsSection title={type.name + (type.private ? ' (private)' : '')} level={4}>
								<DocsItem gap="m">
									<CodeDocDescription node={type} />
									<CodeDeclaration type={type} entity={props.ent} resolve="show" />
								</DocsItem>
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
								<DocsItem gap="m">
									<CodeDocDescription node={type} />
									<CodeDeclaration type={type} entity={props.ent} resolve="show" />
								</DocsItem>
							</DocsSection>
						)}
					</For>
				</DocsSection>
			</Show>
		</Show>
	);
};
