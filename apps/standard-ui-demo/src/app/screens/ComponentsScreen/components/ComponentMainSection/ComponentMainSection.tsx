import { type ComponentEntityData, resolveComponentDeclaration } from '@no-comply/meta';
import type { Component } from 'solid-js';

import { CodeDocDescription } from '../../../../components';
import { DocsItem } from '../../../../content';
import { useComponentExamples } from '../../providers';
import { ExamplePreview } from '../ExamplePreview';

type Props = {
	component: ComponentEntityData;
};

export const ComponentMainSection: Component<Props> = props => {
	const { primaryExample } = useComponentExamples();

	return (
		<DocsItem>
			<CodeDocDescription node={props.component} />
			<ExamplePreview example={primaryExample} />
			<CodeDocDescription node={resolveComponentDeclaration(props.component)} />
		</DocsItem>
	);
};
