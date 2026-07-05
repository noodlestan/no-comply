import { Link } from '@no-comply/standard-ui';
import { For } from 'solid-js';
import type { Component } from 'solid-js';

import { DocsItem, DocsSection } from '../../../../../../content';
import { routeFor } from '../../../../../../navigation';

type Props = {
	packageNames: string[];
};

export const ApiIndexListSection: Component<Props> = props => {
	return (
		<DocsSection title="Packages">
			<For each={props.packageNames}>
				{name => (
					<DocsItem title={<Link href={routeFor.package(name)}>{name}</Link>}>{name}</DocsItem>
				)}
			</For>
		</DocsSection>
	);
};
