/* eslint-disable dot-notation */
import { type ComponentEntityData, isNoComplyComponent } from '@no-comply/meta';
import { VisuallyHidden } from '@no-comply/solid-composables';
import { Display } from '@no-comply/standard-ui';
import { useParams } from '@solidjs/router';
import { type Component, Show } from 'solid-js';

import { useMeta } from '../../../../../providers';
import { EmptyPage, NotFoundPage } from '../../../../templates';
import { ComponentPlaygroundSection } from '../../components';
import { ComponentExamplesProvider } from '../../providers';

export const ComponentPlaygroundPage: Component = () => {
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
				<EmptyPage data-component-page>
					<VisuallyHidden>
						<Display level={2}>Playground page</Display>
					</VisuallyHidden>
					<ComponentExamplesProvider component={maybeData()}>
						<ComponentPlaygroundSection />
					</ComponentExamplesProvider>
				</EmptyPage>
			</Show>
		</>
	);
};
