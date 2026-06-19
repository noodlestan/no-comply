/* eslint-disable dot-notation */
import type { ComponentEntityData } from '@no-comply/meta';
import {
	createChainedResource,
	createCombinedResource,
	staticClassList,
} from '@no-comply/solid-primitives';
import { Flex, Layout, Scrollable, Surface } from '@no-comply/standard-ui';
import { type TSXView, viewTargetProps } from '@purrtrait/view-tsx';
import { type Component, createResource, createSignal, mergeProps } from 'solid-js';

import { ComponentPropsTable } from '../../../../../../../components';
import { useComponentExamples } from '../../../../../providers';

import styles from './PlaygroundProps.module.scss';
import { PlaygroundPropControls, PlaygroundPropsHeader } from './parts';

type Props = {
	component: ComponentEntityData;
};

export const PlaygroundProps: Component<Props> = props => {
	const [showDocs, setShowDocs] = createSignal(false);
	const [showGroups, setShowGroups] = createSignal(false);

	const classList = staticClassList(styles, ['PlaygroundProps']);

	const {
		currentExampleIndex,
		currentExampleParsed,
		currentTargetKey,
		targetPropsOverrides,
		setTargetPropOverride,
		resetTargetOverrides,
	} = useComponentExamples();

	const [targets] = createChainedResource(currentExampleParsed, parsed => parsed.targets);

	const [currentTarget] = createResource(
		createCombinedResource([targets, currentTargetKey]),
		([targets, key]) => key || Object.keys(targets)[0],
	);

	const [propValues] = createChainedResource(
		createCombinedResource([currentExampleIndex, currentExampleParsed, currentTarget]),
		([index, parsed, target]) => {
			const targetProps = viewTargetProps(
				parsed as TSXView,
				target as string,
				([, node]) => node.serialized,
			);
			const overrides = targetPropsOverrides(index as number, target as string);
			const merged = mergeProps(targetProps, overrides);
			return merged;
		},
	);

	const handleChangeProp = (name: string, value: unknown) => {
		const index = currentExampleIndex();
		const t = targets();
		const target = currentTargetKey() || Object.keys(t || {})[0];
		if (index !== undefined && target !== undefined) {
			setTargetPropOverride(index, target, name, value);
		}
	};

	const handleResetProp = (name: string) => handleChangeProp(name, undefined);

	const handleResetTarget = () => {
		resetTargetOverrides(currentExampleIndex() as number, currentTargetKey() as string);
	};

	return (
		<Surface variant="panel" classList={classList}>
			<Flex direction="column" stretch="height">
				<Layout padding={['s', 'm']} classList={staticClassList(styles, ['-Header'])}>
					<PlaygroundPropsHeader
						component={props.component}
						showDocs={showDocs()}
						onShowDocsChange={setShowDocs}
						showGroups={showGroups()}
						onShowGroupsChange={setShowGroups}
						onResetExample={handleResetTarget}
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
									propValues={propValues}
									onChangeProp={handleChangeProp}
									propControls={prop => (
										<PlaygroundPropControls prop={prop} onResetProp={handleResetProp} />
									)}
								/>
							</Layout>
						</Scrollable>
					</Surface>
				</Flex>
			</Flex>
		</Surface>
	);
};
