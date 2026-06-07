/* eslint-disable dot-notation */
import type { ComponentEntityData } from '@no-comply/meta-entities';
import { staticClassList } from '@no-comply/solid-primitives';
import {
	Display,
	Flex,
	Icon,
	Label,
	Layout,
	Link,
	Scrollable,
	Surface,
	Text,
} from '@no-comply/standard-ui';
import {
	type ObjectLiteralTypeNode,
	type TypeDeclaration,
	type TypeExpressionDeclaration,
	createResolveTypeContext,
	resolveTypeDeclaration,
} from '@purrception/lang-ts';
import BookOpenIcon from 'lucide-solid/icons/book-open';
import { type Component } from 'solid-js';

import { getTokenEntityMaybe } from '../../../../../../../providers';
import { ComponentPropsTable } from '../../../../../../components';
import { routeFor } from '../../../../../../navigation';

import styles from './ComponentPropsSection.module.scss';

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
				<Flex direction="row" gap="l" align="baseline" justify="between">
					<Display level={3}>Props</Display>
					<Flex direction="row" gap="l" align="baseline">
						<Flex direction="row" gap="s" align="center">
							<Icon icon={BookOpenIcon} size="small" />
							<Text>
								<Link href={routeFor.entity(props.component)}>API Reference</Link>
							</Text>
						</Flex>
						<Label>
							<input type="checkbox" />
							Show docs
						</Label>
					</Flex>
				</Flex>

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
