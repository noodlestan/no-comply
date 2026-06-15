/* eslint-disable dot-notation */
import { type ComponentEntityData, isNoComplyComponent } from '@no-comply/meta';
import { useParams } from '@solidjs/router';
import { type Component, Show } from 'solid-js';

import { useMeta } from '../../../../../providers';
import { ComponentMeta } from '../../../../content';
import { BasePage, NotFoundPage } from '../../../../templates';
import { ComponentMainSection, ComponentPlaygroundSection } from '../../components';
import { ComponentExamplesProvider } from '../../providers';

export const ComponentPage: Component = () => {
	const params = useParams();

	// eslint-disable-next-line dot-notation
	const name = () => params['component'] as string;
	const { getEntities } = useMeta();

	const maybeData = () => {
		return getEntities().find(entity => {
			return isNoComplyComponent(entity) && entity.name === name();
		}) as ComponentEntityData;
	};

	return (
		<>
			<Show when={!maybeData()}>
				<NotFoundPage undertitle={`Component ${name()} does not exist.`}>
					Search for components
				</NotFoundPage>
			</Show>
			<Show when={maybeData()}>
				<BasePage
					title={maybeData()?.name}
					undertitle={<ComponentMeta component={maybeData()} />}
					data-component-page
				>
					<ComponentExamplesProvider component={maybeData()}>
						<ComponentMainSection component={maybeData()} />
						<ComponentPlaygroundSection />
					</ComponentExamplesProvider>
				</BasePage>
			</Show>
		</>
	);
};
