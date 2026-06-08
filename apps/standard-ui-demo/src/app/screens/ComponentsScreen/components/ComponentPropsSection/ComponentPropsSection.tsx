/* eslint-disable dot-notation */
import type { ComponentEntityData } from '@no-comply/meta';
import { staticClassList } from '@no-comply/solid-primitives';
import { Flex, Layout, Scrollable, Surface } from '@no-comply/standard-ui';
import { type Component, createSignal } from 'solid-js';

import { ComponentPropsTable } from '../../../../components';

import styles from './ComponentPropsSection.module.scss';
import { ComponentPropsSectionHeader } from './parts';

type Props = {
	component: ComponentEntityData;
};

export const ComponentPropsSection: Component<Props> = props => {
	const [showDocs, setShowDocs] = createSignal(false);
	const [showGroups, setShowGroups] = createSignal(false);

	const classList = staticClassList(styles, ['ComponentPropsSection']);

	return (
		<Surface variant="panel" classList={classList}>
			<Flex direction="column" stretch="height">
				<Layout padding={['s', 'm']} classList={staticClassList(styles, ['-Header'])}>
					<ComponentPropsSectionHeader
						component={props.component}
						showDocs={showDocs()}
						onShowDocsChange={setShowDocs}
						showGroups={showGroups()}
						onShowGroupsChange={setShowGroups}
					/>
				</Layout>

				<Flex overflow="hidden">
					<Surface variant="page" stretch="height">
						<Scrollable y>
							<Layout padding={['l', 'none', 'm', 'm']}>
								<ComponentPropsTable
									component={props.component}
									showDocs={showDocs()}
									showGroups={showGroups()}
								/>
							</Layout>
						</Scrollable>
					</Surface>
				</Flex>
			</Flex>
		</Surface>
	);
};
