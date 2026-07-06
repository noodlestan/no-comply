/* eslint-disable dot-notation */
import type {
	ComponentEntityData,
	ContextEntityData,
	ControllerEntityData,
	MixinEntityData,
	ProviderEntityData,
	ServiceEntityData,
} from '@no-comply/meta';
import { Link, Text } from '@no-comply/standard-ui';
import { useParams } from '@solidjs/router';
import { type Component, Match, Show, Switch } from 'solid-js';

import { useMeta } from '../../../../../providers';
import { routeFor } from '../../../../navigation';
import { BasePage, NotFoundPage } from '../../../../templates';
import {
	APIEntityComponent,
	APIEntityContext,
	APIEntityController,
	APIEntityMixin,
	APIEntityProvider,
	APIEntityService,
	ApiBreadcrumbs,
} from '../../components';

export const ApiEntityPage: Component = () => {
	const params = useParams();

	const { getEntityMaybe } = useMeta();

	const pkg = () => params['ns'] + '/' + params['pkg'];
	const mod = () => params['mod'] as string;
	const type = () => params['type'] as string;
	const name = () => params['ent'] as string;
	const data = () => getEntityMaybe(pkg(), type(), name());
	const title = () => `${type()}: ${name()}`;

	return (
		<>
			<Show when={!data()}>
				<NotFoundPage undertitle={`Entity ${pkg()}:${mod()}/${type()}:${name()} does not exist.`}>
					<Text size="large">
						<Link href={routeFor.api()}>API home</Link>
					</Text>
				</NotFoundPage>
			</Show>
			<Show when={data()}>
				<BasePage
					title={title()}
					overtitle={<ApiBreadcrumbs pkg={pkg()} mod={mod()} type={type()} ent={name()} />}
					data-api-entity-page
				>
					<Switch fallback={<>TYPE: {type()}</>}>
						<Match when={type() === 'component'}>
							<APIEntityComponent ent={data() as ComponentEntityData} />
						</Match>
						<Match when={type() === 'context'}>
							<APIEntityContext ent={data() as ContextEntityData} />
						</Match>
						<Match when={type() === 'controller'}>
							<APIEntityController ent={data() as ControllerEntityData} />
						</Match>
						<Match when={type() === 'mixin'}>
							<APIEntityMixin ent={data() as MixinEntityData} />
						</Match>
						<Match when={type() === 'provider'}>
							<APIEntityProvider ent={data() as ProviderEntityData} />
						</Match>
						<Match when={type() === 'service'}>
							<APIEntityService ent={data() as ServiceEntityData} />
						</Match>
					</Switch>
				</BasePage>
			</Show>
		</>
	);
};
