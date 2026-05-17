import { Link, Text } from '@no-comply/standard-ui';
import { useParams } from '@solidjs/router';
import { type Component, For, Show } from 'solid-js';

import { useMeta } from '../../../../../providers';
import { DocsSection } from '../../../../content';
import { routeFor } from '../../../../navigation';
import { BasePage, NotFoundPage } from '../../../../templates';
import { ApiBreadcrumbs } from '../../components';

export const ApiModulePage: Component = () => {
	const params = useParams();

	const { getModuleMaybe, getModuleEntities } = useMeta();

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
					<DocsSection title="Entities">
						<ul>
							<For each={getModuleEntities(pkg(), name())}>
								{ent => (
									<li>
										<Text>
											<Link href={routeFor.entity(pkg(), name(), ent.type, ent.name)}>
												{ent.type}: {ent.name}
											</Link>
										</Text>
									</li>
								)}
							</For>
						</ul>
					</DocsSection>
				</BasePage>
			</Show>
		</>
	);
};
