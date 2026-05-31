/* eslint-disable dot-notation */
import type { ComponentEntityData } from '@no-comply/meta-entities';
import { Display, Link, Text } from '@no-comply/standard-ui';
import type { TypeDeclaration } from '@purrception/lang-ts';
import { useParams } from '@solidjs/router';
import { type Component, Show } from 'solid-js';

import { type ComponentName } from '../../../../../data';
import { useMeta } from '../../../../../providers';
import { DeclarationCodeBlock } from '../../../../components';
import {
	ComponentMeta,
	type DocsSectionData,
	RenderDocsSections,
	components,
} from '../../../../content';
import { routeFor } from '../../../../navigation';
import { BasePage, NotFoundPage } from '../../../../templates';

export const ComponentPage: Component = () => {
	const params = useParams();

	// eslint-disable-next-line dot-notation
	const name = () => params['component'] as ComponentName;
	const { getEntityMaybe } = useMeta();
	const data = () =>
		getEntityMaybe('@no-comply/standard-ui', 'component', name()) as ComponentEntityData;
	const page = () => components[name()]?.(data());

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
					undertitle={
						<>
							<ComponentMeta component={data()} />
							<Text>
								See also <Link href={routeFor.entity(data())}>API Reference</Link>
							</Text>
						</>
					}
					data-component-page
				>
					<Display level={3}>Props</Display>
					<DeclarationCodeBlock
						type={data().types['Props'] as TypeDeclaration}
						entity={data()}
						resolve={true}
					/>
					<RenderDocsSections sections={page()?.items as DocsSectionData[]} />
				</BasePage>
			</Show>
		</>
	);
};
