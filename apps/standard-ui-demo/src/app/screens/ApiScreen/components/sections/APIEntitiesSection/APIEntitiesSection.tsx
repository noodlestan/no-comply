import type { ModuleEntityData } from '@no-comply/meta';
import { Link, Text } from '@no-comply/standard-ui';
import { type Component, For, Show } from 'solid-js';

import { useMeta } from '../../../../../../providers';
import { DocsSection } from '../../../../../content';
import { routeFor } from '../../../../../navigation';

type Props = {
	ent: ModuleEntityData;
};

export const APIEntitiesSection: Component<Props> = props => {
	const { getModuleEntities } = useMeta();

	const entities = () => getModuleEntities(props.ent.package, props.ent.name);
	const show = () => entities().length;

	return (
		<Show when={show()}>
			<DocsSection title="Entities">
				<ul>
					<For each={entities()}>
						{ent => (
							<li>
								<Text>
									<Link href={routeFor.entity(ent)}>
										{ent.type}: {ent.name}
									</Link>
								</Text>
							</li>
						)}
					</For>
				</ul>
			</DocsSection>
		</Show>
	);
};
