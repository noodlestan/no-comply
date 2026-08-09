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

import { CodeSymbolLink } from '../../../../../../modules/code/components';
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

export const APIDependenciesSection: Component<Props> = props => {
	const show = () => false && Object.keys(props.ent.symbols.imported).length > 0;

	return (
		<Show when={show()}>
			<DocsSection title="Dependencies">
				<ul>
					<For each={Object.values(props.ent.symbols.imported)}>
						{symbol => (
							<li>
								<CodeSymbolLink symbol={symbol} /> from {symbol.from}
							</li>
						)}
					</For>
				</ul>
			</DocsSection>
		</Show>
	);
};
