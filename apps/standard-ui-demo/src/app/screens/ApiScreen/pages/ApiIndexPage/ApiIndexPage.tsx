import { Link } from '@no-comply/standard-ui';
import { For } from 'solid-js';
import type { Component } from 'solid-js';

import { useMeta } from '../../../../../providers';
import { DocsItem, DocsSection } from '../../../../content';
import { routeFor } from '../../../../navigation';
import { BasePage } from '../../../../templates';

export const ApiIndexPage: Component = () => {
	const { getPackageNames } = useMeta();

	return (
		<BasePage title="API">
			<DocsSection title="Packages">
				<For each={getPackageNames()}>
					{name => (
						<DocsItem title={<Link href={routeFor.package(name)}>{name}</Link>}>{name}</DocsItem>
					)}
				</For>
			</DocsSection>
		</BasePage>
	);
};
