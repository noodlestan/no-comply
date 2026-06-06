/* eslint-disable dot-notation */
import type { ComponentEntityData } from '@no-comply/meta-entities';
import { Display, Flex, Link, Text } from '@no-comply/standard-ui';
import {
	type ObjectLiteralTypeNode,
	type TypeDeclaration,
	type TypeExpressionDeclaration,
	createResolveTypeContext,
	resolveTypeDeclaration,
} from '@purrception/lang-ts';
import { useParams } from '@solidjs/router';
import { type Component, Show } from 'solid-js';

import { type ComponentName } from '../../../../../data';
import { getTokenEntityMaybe, useMeta } from '../../../../../providers';
import { ComponentPropsTable } from '../../../../components';
import { ComponentMeta } from '../../../../content';
import { routeFor } from '../../../../navigation';
import { BasePage, NotFoundPage } from '../../../../templates';

export const ComponentPage: Component = () => {
	const params = useParams();

	// eslint-disable-next-line dot-notation
	const name = () => params['component'] as ComponentName;
	const { getEntityMaybe } = useMeta();
	const data = () =>
		getEntityMaybe('@no-comply/standard-ui', 'component', name()) as ComponentEntityData;

	const componentProps = () => {
		const context = createResolveTypeContext(getTokenEntityMaybe, data());
		const props = resolveTypeDeclaration(
			context,
			data().types['Props'] as TypeDeclaration,
		) as TypeExpressionDeclaration<ObjectLiteralTypeNode>;

		return Object.entries(props.node.members).map(([name, node]) => ({ name, node }));
	};

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
					<Flex gap="l">
						<Display level={3}>Props</Display>

						<Text>
							See also <Link href={routeFor.entity(data())}>API Reference</Link>
						</Text>
						{/* <DeclarationCodeBlock
						type={data().types['Props'] as TypeDeclaration}
						entity={data()}
						resolve={true}
					/> */}
						<ComponentPropsTable component={data()} props={componentProps()} />
					</Flex>
				</BasePage>
			</Show>
		</>
	);
};
