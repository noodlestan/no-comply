import type { ModuleEntityData } from '@no-comply/meta-entities';
import { Link, Text } from '@no-comply/standard-ui';
import { useParams } from '@solidjs/router';
import { type Component, Show } from 'solid-js';

import { useMeta } from '../../../../../providers';
import { routeFor } from '../../../../navigation';
import { BasePage, NotFoundPage } from '../../../../templates';
import {
	APIDependenciesSection,
	APIEntitiesSection,
	APIHelpersSection,
	APITypesSection,
	ApiBreadcrumbs,
} from '../../components';

export const ApiModulePage: Component = () => {
	const params = useParams();

	const { getModuleMaybe } = useMeta();

	// eslint-disable-next-line dot-notation
	const pkg = () => params['ns'] + '/' + params['pkg'];
	// eslint-disable-next-line dot-notation
	const name = () => params['mod'] as string;
	const data = () => getModuleMaybe(pkg(), name());

	return (
		<>
			<Show when={!data()}>
				<NotFoundPage undertitle={`Module ${pkg()}:${name()} does not exist.`}>
					<Text variant="large">
						<Link href={routeFor.api()}>API home</Link>
					</Text>
				</NotFoundPage>
			</Show>
			<Show when={data()}>
				<BasePage
					title={name()}
					overtitle={<ApiBreadcrumbs pkg={pkg()} mod={name()} />}
					data-api-module-page
				>
					<APIEntitiesSection ent={data() as ModuleEntityData} />
					<APIHelpersSection ent={data() as ModuleEntityData} />
					<APITypesSection ent={data() as ModuleEntityData} />
					<APIDependenciesSection ent={data() as ModuleEntityData} />
				</BasePage>
			</Show>
		</>
	);
};
