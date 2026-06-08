/* eslint-disable dot-notation */
import type { ComponentEntityData } from '@no-comply/meta';
import { useParams } from '@solidjs/router';
import { type Component, Show } from 'solid-js';

import { type ComponentName } from '../../../../../data';
import { useMeta } from '../../../../../providers';
import { ComponentMeta } from '../../../../content';
import { BasePage, NotFoundPage } from '../../../../templates';
import { ComponentPropsSection } from '../../components';

export const ComponentPage: Component = () => {
	const params = useParams();

	// eslint-disable-next-line dot-notation
	const name = () => params['component'] as ComponentName;
	const { getEntityMaybe } = useMeta();
	const data = () =>
		getEntityMaybe('@no-comply/standard-ui', 'component', name()) as ComponentEntityData;
	// const page = () => components[name()]?.(data());

	return (
		<>
			<Show when={!data()}>
				<NotFoundPage undertitle={`Component ${name()} does not exist.`}>
					Search for components
				</NotFoundPage>
			</Show>
			<Show when={data()}>
				<BasePage
					title={data()?.name}
					undertitle={<ComponentMeta component={data()} />}
					data-component-page
				>
					<ComponentPropsSection component={data()} />
				</BasePage>
			</Show>
		</>
	);
};
