/* eslint-disable dot-notation */
import type { ComponentEntityData } from '@no-comply/meta-entities';
import { staticClassList } from '@no-comply/solid-primitives';
import { Flex, Layout, Scrollable, Surface } from '@no-comply/standard-ui';
import {
	type ObjectLiteralTypeNode,
	type TypeDeclaration,
	type TypeExpressionDeclaration,
	createResolveTypeContext,
	resolveTypeDeclaration,
} from '@purrception/lang-ts';
import { type Component, createSignal } from 'solid-js';

import { getTokenEntityMaybe } from '../../../../../providers';
import { ComponentPropsTable } from '../../../../components';

import styles from './ComponentPropsSection.module.scss';
import { ComponentPropsSectionHeader } from './parts';

type Props = {
	component: ComponentEntityData;
};

export const ComponentPropsSection: Component<Props> = props => {
	const [showDocs, setShowDocs] = createSignal(false);
	const [showGroups, setShowGroups] = createSignal(false);

	const componentProps = () => {
		const context = createResolveTypeContext(getTokenEntityMaybe, props.component);
		const cProps = resolveTypeDeclaration(
			context,
			props.component.types['Props'] as TypeDeclaration,
		) as TypeExpressionDeclaration<ObjectLiteralTypeNode>;

		return Object.entries(cProps.node.members).map(([name, node]) => ({ name, node }));
	};

	const classList = staticClassList(styles, ['ComponentPropsSection']);

	return (
		<Surface variant="panel" classList={classList}>
			<Flex direction="column" gap="m" stretch="height">
				<Layout padding={['s', 'm']}>
					<ComponentPropsSectionHeader
						component={props.component}
						showDocs={showDocs()}
						onShowDocsChange={setShowDocs}
						showGroups={showGroups()}
						onShowGroupsChange={setShowGroups}
					/>
				</Layout>

				<Flex overflow="hidden">
					<Scrollable y>
						{/* <DeclarationCodeBlock
						type={props.component.types['Props'] as TypeDeclaration}
						entity={props.component}
						resolve={true}
					/> */}
						<Layout padding={['s', 'none', 's', 'm']}>
							<ComponentPropsTable
								component={props.component}
								props={componentProps()}
								showDocs={showDocs()}
								showGroups={showGroups()}
							/>
						</Layout>
					</Scrollable>
				</Flex>
			</Flex>
		</Surface>
	);
};
