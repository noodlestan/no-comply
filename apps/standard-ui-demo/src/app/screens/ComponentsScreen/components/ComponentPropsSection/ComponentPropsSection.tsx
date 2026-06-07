/* eslint-disable dot-notation */
import type { ComponentEntityData } from '@no-comply/meta-entities';
import { staticClassList } from '@no-comply/solid-primitives';
import { Flex, Scrollable, Surface } from '@no-comply/standard-ui';
import {
	type ObjectLiteralTypeNode,
	type TypeDeclaration,
	type TypeExpressionDeclaration,
	createResolveTypeContext,
	resolveTypeDeclaration,
} from '@purrception/lang-ts';
import { type Component } from 'solid-js';

import { getTokenEntityMaybe } from '../../../../../providers';
import { ComponentPropsTable } from '../../../../components';

import styles from './ComponentPropsSection.module.scss';
import { ComponentPropsSectionHeader } from './parts';

type Props = {
	component: ComponentEntityData;
};

export const ComponentPropsSection: Component<Props> = props => {
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
		<Surface variant="panel" classList={classList} padding="s">
			<Flex direction="column" gap="m" stretch="height">
				<ComponentPropsSectionHeader component={props.component} />

				<Flex overflow="hidden">
					<Scrollable y>
						{/* <DeclarationCodeBlock
						type={props.component.types['Props'] as TypeDeclaration}
						entity={props.component}
						resolve={true}
					/> */}
						<ComponentPropsTable component={props.component} props={componentProps()} />
					</Scrollable>
				</Flex>
			</Flex>
		</Surface>
	);
};
