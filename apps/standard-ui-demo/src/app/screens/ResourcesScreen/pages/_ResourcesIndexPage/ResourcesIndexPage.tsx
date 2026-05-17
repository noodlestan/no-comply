import { Display, Flex } from '@no-comply/standard-ui';
import { type Component } from 'solid-js';

import { ResourcesPage } from '../../private';

export const ResourcesIndexPage: Component = () => {
	return (
		<ResourcesPage
			title="Resources"
			undertitle={
				<Display tag="p" variant="m">
					Sandbox pages
				</Display>
			}
		>
			<Flex direction="column" gap="m">
				...
			</Flex>
		</ResourcesPage>
	);
};
