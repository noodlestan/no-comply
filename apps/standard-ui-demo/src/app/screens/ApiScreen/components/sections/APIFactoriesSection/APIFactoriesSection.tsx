import {
	type ContextEntityData,
	type ControllerEntityData,
	type MixinEntityData,
	type ServiceEntityData,
	getEntityFunctions,
} from '@no-comply/meta';
import { PurrceptionLanguageId } from '@purrtrait/lang-ts';
import { type Component, For, Show } from 'solid-js';

import { CodeBlock } from '../../../../../components';
import { DocsSection } from '../../../../../content';

type Props = {
	ent: ContextEntityData | ControllerEntityData | MixinEntityData | ServiceEntityData;
};

export const APIFactoriesSection: Component<Props> = props => {
	const factories = () => getEntityFunctions(props.ent, props.ent.factories);
	const show = () => factories().length > 0;

	return (
		<Show when={show()}>
			<DocsSection title="Factories">
				<For each={factories()}>
					{factory => (
						<DocsSection title={factory.name} level={4}>
							<CodeBlock
								lang={PurrceptionLanguageId}
								nodes={[factory]}
								context={props.ent}
								padding
								inline
							/>
						</DocsSection>
					)}
				</For>
			</DocsSection>
		</Show>
	);
};
