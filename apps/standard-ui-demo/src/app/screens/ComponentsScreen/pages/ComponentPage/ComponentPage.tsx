import type { ComponentEntityData } from '@no-comply/meta-entities';
import { tsCodeLayout } from '@purrtrait/code-ts';
import {
	CodeBlock,
	SolidCodeLayoutProvider,
	createSolidCodeLayoutContext,
} from '@purrtrait/solid-code';
import { useParams } from '@solidjs/router';
import { type Component, Show } from 'solid-js';

import { type ComponentName } from '../../../../../data';
import { useMeta } from '../../../../../providers';
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
	const name = () => params['component'] as ComponentName;
	const { getEntityMaybe } = useMeta();
	const data = () =>
		getEntityMaybe('@no-comply/standard-ui', 'component', name()) as ComponentEntityData;
	const page = () => components[name()]?.(data());

	const linker = (ctx: unknown, token: string) => {
		if (token === 'Props') {
			return '#Props';
		}
		// console.log(token, data());
		return 'https://works.example';
	};

	const codeLayoutContext = createSolidCodeLayoutContext({ langs: [tsCodeLayout], linker });

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
					<SolidCodeLayoutProvider context={codeLayoutContext}>
						<CodeBlock lang="ts" nodes={[data().component]} context={data()} />
						<RenderDocsSections sections={page()?.items as DocsSectionData[]} />
					</SolidCodeLayoutProvider>
				</BasePage>
			</Show>
		</>
	);
};
