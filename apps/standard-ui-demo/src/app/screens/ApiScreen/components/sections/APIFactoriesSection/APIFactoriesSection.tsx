import type {
	ContextEntityData,
	ControllerEntityData,
	MixinEntityData,
	ServiceEntityData,
} from '@no-comply/meta';
import { CodeBlock } from '@purrtrait/solid-code';
import { type Component, For } from 'solid-js';

import { DocsSection } from '../../../../../content';

type Props = {
	ent: ContextEntityData | ControllerEntityData | MixinEntityData | ServiceEntityData;
};

export const APIFactoriesSection: Component<Props> = props => {
	return (
		<DocsSection title="Factories">
			<For each={props.ent.factories}>
				{factory => (
					<DocsSection title={factory.name} level={4}>
						<CodeBlock lang="ts" nodes={[factory]} context={props.ent} />
					</DocsSection>
				)}
			</For>
		</DocsSection>
	);
};
