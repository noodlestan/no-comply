/* eslint-disable dot-notation */
import type { ComponentEntityData } from '@no-comply/meta';
import {
	createChainedResource,
	createCombinedResource,
	staticClassList,
} from '@no-comply/solid-primitives';
import { Flex, Layout, Scrollable, Surface } from '@no-comply/standard-ui';
import { type TSXView, viewTargetProps } from '@purrtrait/view-tsx';
import { type Component, createSignal, mergeProps } from 'solid-js';

import { ComponentPropsTable } from '../../../../../../../components';
import { $ID_PLAYGROUND_PROPS_TITLE } from '../../../../../constants';
import { useComponentPlayground, useComponentPlaygroundProps } from '../../../../../providers';

import styles from './PlaygroundProps.module.scss';
import { PlaygroundPropControls, PlaygroundPropsHeader } from './parts';

type Props = {
	component: ComponentEntityData;
};

export const PlaygroundProps: Component<Props> = props => {
	const [showDocs, setShowDocs] = createSignal(false);
	const [showGroups, setShowGroups] = createSignal(false);

	const classList = staticClassList(styles, ['PlaygroundProps']);

	const { currentExampleIndex, currentExampleParsed, currentExampleTargets, currentTargetKey } =
		useComponentPlayground();
	const { targetPropsOverrides, setTargetPropOverride, resetTargetOverrides } =
		useComponentPlaygroundProps();

	const [propValues] = createChainedResource(
		createCombinedResource([currentExampleParsed, currentTargetKey]),
		([parsed, target]) => {
			return viewTargetProps(parsed as TSXView, target as string, ([, node]) => node.serialized);
		},
	);

	const [propValuesWithOverrides] = createChainedResource(
		createCombinedResource([currentExampleIndex, currentTargetKey, propValues]),
		([index, target, values]) => {
			const overrides = targetPropsOverrides(index as number, target as string);
			const merged = mergeProps(values, overrides);
			return merged;
		},
	);

	const handleChangeProp = (name: string, value: unknown) => {
		const index = currentExampleIndex();
		const t = currentExampleTargets();
		const target = currentTargetKey() || Object.keys(t || {})[0];
		if (index !== undefined && target !== undefined) {
			setTargetPropOverride(index, target, name, value);
		}
	};

	const handleResetProp = (name: string) => handleChangeProp(name, undefined);

	const isResetEnabledForProp = (name: string) => {
		if (!currentExampleTargets()) {
			return false;
		}
		const originalValues = propValues();
		const withOverrides = propValuesWithOverrides();
		if (!withOverrides) {
			return false;
		}
		return withOverrides?.[name] !== originalValues[name];
	};

	const handleResetTarget = (targetKey: string) => {
		resetTargetOverrides(currentExampleIndex() as number, targetKey);
	};

	return (
		<Surface
			tag="section"
			aria-labelledby={$ID_PLAYGROUND_PROPS_TITLE}
			variant="panel"
			classList={classList}
			stretch="height"
		>
			<Flex direction="column" stretch="height">
				<Layout padding={['s', 'm']} classList={staticClassList(styles, ['-Header'])}>
					<PlaygroundPropsHeader
						component={props.component}
						targets={currentExampleTargets()}
						showDocs={showDocs()}
						onShowDocsChange={setShowDocs}
						showGroups={showGroups()}
						onShowGroupsChange={setShowGroups}
						onResetTarget={handleResetTarget}
					/>
				</Layout>

				<Surface variant="page" stretch="height">
					<Scrollable y>
						<Layout padding={['l', 'none', 'm', 'm']}>
							<ComponentPropsTable
								component={props.component}
								showDocs={showDocs()}
								showGroups={showGroups()}
								propValues={propValuesWithOverrides}
								onChangeProp={handleChangeProp}
								propControls={prop => (
									<PlaygroundPropControls
										prop={prop}
										onResetProp={handleResetProp}
										resetEnabled={isResetEnabledForProp(prop.name)}
									/>
								)}
							/>
						</Layout>
					</Scrollable>
				</Surface>
			</Flex>
		</Surface>
	);
};
