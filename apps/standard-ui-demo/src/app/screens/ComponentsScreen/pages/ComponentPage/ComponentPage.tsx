/* eslint-disable dot-notation */
import {
	type ComponentEntityData,
	isNoComplyComponent,
	resolveComponentDeclaration,
	resolveComponentFactoryDeclaration,
} from '@no-comply/meta';
import { Display } from '@no-comply/standard-ui';
import type { JsDocData } from '@purrception/lang-ts';
import { useParams } from '@solidjs/router';
import { type Component, Show } from 'solid-js';

import { useMeta } from '../../../../../providers';
import { APILink, CodeDocDescription } from '../../../../components';
import { ComponentMeta } from '../../../../content';
import { BasePage, NotFoundPage } from '../../../../templates';
import { ComponentExamplesProvider } from '../../providers';

import { ComponentMainPreview } from './parts';

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

	const componentDeclararion = () => resolveComponentDeclaration(maybeData());
	const factoryDeclararion = () => resolveComponentFactoryDeclaration(maybeData());

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
					<CodeDocDescription title={<Display level={3}>Purpose</Display>} node={maybeData()} />

					<ComponentExamplesProvider component={maybeData()}>
						<ComponentMainPreview defaultTitle="Preview" />
					</ComponentExamplesProvider>

					<CodeDocDescription
						title={
							<>
								<Display level={3}>Implementation</Display>
								<APILink mode="block" prefix="See also:" entity={maybeData()} />
							</>
						}
						node={componentDeclararion() as JsDocData}
					/>

					<Show when={factoryDeclararion}>
						<CodeDocDescription
							title={<Display level={4}>Factory</Display>}
							node={factoryDeclararion() as JsDocData}
						/>
					</Show>
				</BasePage>
			</Show>
		</>
	);
};
