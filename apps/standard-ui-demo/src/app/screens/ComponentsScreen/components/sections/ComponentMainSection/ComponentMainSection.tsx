import { type ComponentEntityData, resolveComponentDeclaration } from '@no-comply/meta';
import { type Component } from 'solid-js';

import { CodeDocDescription } from '../../../../../components';
import { DocsItem } from '../../../../../content';

import { ComponentMainPreview } from './parts';

type Props = {
	component: ComponentEntityData;
};

export const ComponentMainSection: Component<Props> = props => {
	return (
		<DocsItem gap="l">
			<CodeDocDescription node={props.component} />
			<ComponentMainPreview defaultTitle="Preview" />
			<CodeDocDescription node={resolveComponentDeclaration(props.component)} />
		</DocsItem>
	);
};
