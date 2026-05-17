/* eslint-disable dot-notation */
import { Link, Text } from '@no-comply/standard-ui';
import { useParams } from '@solidjs/router';
import { type Component, Show } from 'solid-js';

import { useMeta } from '../../../../../providers';
import { DocsSection } from '../../../../content';
import { routeFor } from '../../../../navigation';
import { BasePage, NotFoundPage } from '../../../../templates';
import { ApiBreadcrumbs } from '../../components';

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
					<Text variant="large">
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
					<DocsSection title="Factory">x</DocsSection>
				</BasePage>
			</Show>
		</>
	);
};
