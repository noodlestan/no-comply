/* eslint-disable dot-notation */
import { type ComponentEntityData, isNoComplyComponent } from '@no-comply/meta';
import { useParams } from '@solidjs/router';
import { type Component, Show } from 'solid-js';

import { useMeta } from '../../../../../providers';
import { ComponentMeta } from '../../../../content';
import { BasePage, NotFoundPage } from '../../../../templates';
import { ComponentPropsSection } from '../../components';

export const ComponentPage: Component = () => {
	const params = useParams();

	// eslint-disable-next-line dot-notation
	const name = () => params['component'] as string;
	const { getEntities } = useMeta();

	const maybeData = () =>
		getEntities().find(entity => {
			return isNoComplyComponent(entity) && entity.name === name();
		});

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
					undertitle={<ComponentMeta component={maybeData() as ComponentEntityData} />}
					data-component-page
				>
					<ComponentPropsSection component={maybeData() as ComponentEntityData} />
				</BasePage>
			</Show>
		</>
	);
};
