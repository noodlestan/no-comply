import { type ComponentEntityData, resolveComponentDeclaration } from '@no-comply/meta';
import type { Component } from 'solid-js';

import { CodeDocDescription } from '../../../../components';
import { DocsItem } from '../../../../content';
import { useComponentExamples } from '../../providers';
import { ComponentMainPreview } from '../ExamplePreview';

type Props = {
	component: ComponentEntityData;
};

export const ComponentMainSection: Component<Props> = props => {
	const { primaryExample } = useComponentExamples();

	return (
		<DocsItem gap="l">
			<CodeDocDescription node={props.component} />
			<ComponentMainPreview example={primaryExample} defaultTitle="Preview" />
			<CodeDocDescription node={resolveComponentDeclaration(props.component)} />
		</DocsItem>
	);
};
