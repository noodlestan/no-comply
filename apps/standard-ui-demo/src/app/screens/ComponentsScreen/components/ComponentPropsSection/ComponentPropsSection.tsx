/* eslint-disable dot-notation */
import type { ComponentEntityData } from '@no-comply/meta';
import { staticClassList } from '@no-comply/solid-primitives';
import { Flex, Layout, Scrollable, Surface } from '@no-comply/standard-ui';
import { type TSXViewTarget, viewTargetProps } from '@purrtrait/view-tsx';
import { type Component, createEffect, createResource, createSignal, mergeProps } from 'solid-js';

import { ComponentPropsTable } from '../../../../components';
import { useComponentExamples } from '../../providers';

import styles from './ComponentPropsSection.module.scss';
import { ComponentPropsSectionHeader } from './parts';

type Props = {
	component: ComponentEntityData;
};

export const ComponentPropsSection: Component<Props> = props => {
	const [showDocs, setShowDocs] = createSignal(false);
	const [showGroups, setShowGroups] = createSignal(false);

	const classList = staticClassList(styles, ['ComponentPropsSection']);

	const {
		currentExampleIndex,
		currentExample,
		currentTargetKey,
		targetPropsOverrides,
		setTargetPropOverride,
	} = useComponentExamples();

	const [targets, setTargets] = createSignal<Record<string, TSXViewTarget>>();

	createEffect(() => {
		const example = currentExample();
		if (example) {
			createResource(example.parsed(), parsed => {
				setTargets(parsed.view.targets);
			});
		}
	});

	const componentProps = () => {
		const index = currentExampleIndex();
		const t = targets();

		const parsed = currentExample()?.parsed();
		const target = currentTargetKey() || Object.keys(t || {})[0];

		if (index !== undefined && parsed && target !== undefined) {
			const targetProps = viewTargetProps(parsed.view, target, ([, node]) => node.serialized);
			const overrides = targetPropsOverrides(index, target);
			const merged = mergeProps(targetProps, overrides);
			return merged;
		}
		throw new Error(`WIP = Read before ready`);
	};

	const handleChangeProp = (name: string, value: unknown) => {
		const index = currentExampleIndex();
		const t = targets();
		const target = currentTargetKey() || Object.keys(t || {})[0];
		if (index !== undefined && target !== undefined) {
			setTargetPropOverride(index, target, name, value);
		}
	};

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
									props={componentProps()}
									onChangeProp={handleChangeProp}
								/>
							</Layout>
						</Scrollable>
					</Surface>
				</Flex>
			</Flex>
		</Surface>
	);
};
