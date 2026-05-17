// import type { InterfaceTypeNode, TypeDeclarationData } from '@purrception/types-ts';
import type { ComponentEntityData } from '@no-comply/meta-entities';
import { createCodeLayoutContext } from '@purrtrait/code-layout';
import { tsCodeLayout } from '@purrtrait/code-ts';
import { CodeLayoutProvider, TypeBlock } from '@purrtrait/solid-code';
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

	const linker = (token: string) => {
		if (token === 'Props') {
			return '#Props';
		}
		// console.log(token, data());
		return 'https://works.example';
	};

	const codeLayoutContext = createCodeLayoutContext({ langs: [tsCodeLayout], linker });

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
					<CodeLayoutProvider context={codeLayoutContext}>
						<TypeBlock lang="ts" node={data().component} />
						<RenderDocsSections sections={page()?.items as DocsSectionData[]} />
					</CodeLayoutProvider>
				</BasePage>
			</Show>
		</>
	);
};
