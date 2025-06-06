import { useParams } from '@solidjs/router';
import { type Component, Show } from 'solid-js';

import { type ComponentMetadata, type ComponentName } from '../../../../../data';
import {
	ComponentMeta,
	type DocsSectionData,
	RenderDocsSections,
	components,
} from '../../../../content';
import { BasePage, NotFoundPage } from '../../../../templates';

export const ComponentPage: Component = () => {
	const params = useParams();

	// eslint-disable-next-line dot-notation
	const component = () => params['component'] as ComponentName;
	const page = () => components[component()];

	return (
		<>
			<Show when={!page()}>
				<NotFoundPage undertitle={`Component ${component()} does not exist.`}>
					Search for components
				</NotFoundPage>
			</Show>
			<Show when={page()}>
				<BasePage
					title={page()?.title}
					undertitle={<ComponentMeta component={page()?.component as ComponentMetadata} />}
					data-component-page
				>
					<RenderDocsSections sections={page()?.items as DocsSectionData[]} />
				</BasePage>
			</Show>
		</>
	);
};
