import { Link, Text } from '@no-comply/standard-ui';
import { useParams } from '@solidjs/router';
import { type Component, For, Show } from 'solid-js';

import { useMeta } from '../../../../../providers';
import { DocsSection } from '../../../../content';
import { routeFor } from '../../../../navigation';
import { BasePage, NotFoundPage } from '../../../../templates';
import { ApiBreadcrumbs } from '../../components';

export const ApiPackagePage: Component = () => {
	const params = useParams();

	const { hasPackage, getPackageModuleNames } = useMeta();

	// eslint-disable-next-line dot-notation
	const name = () => params['ns'] + '/' + params['pkg'];
	const data = () => hasPackage(name());

	return (
		<>
			<Show when={!data()}>
				<NotFoundPage undertitle={`Package ${name()} does not exist.`}>
					<Text variant="large">
						<Link href={routeFor.api()}>API home</Link>
					</Text>
				</NotFoundPage>
			</Show>
			<Show when={data()}>
				<BasePage title={name()} overtitle={<ApiBreadcrumbs pkg={name()} />} data-api-package-page>
					<DocsSection title="Modules">
						<ul>
							<For each={getPackageModuleNames(name())}>
								{mod => (
									<li>
										<Text>
											<Link href={routeFor.module(name(), mod)}>{mod}</Link>
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
