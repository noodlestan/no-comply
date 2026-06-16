import { type Component } from 'solid-js';

import { type ReadyExampleAPI, useComponentExamples } from '../../providers';
import { RenderExample } from '../RenderExample';

type Props = {
	example: ReadyExampleAPI;
};

export const ComponentPlaygroundPreview: Component<Props> = props => {
	const { currentExampleIndex, examplePropsOverrides: exampleOverrides } = useComponentExamples();

	const propOverrides = () => {
		const index = currentExampleIndex();

		if (index !== undefined) {
			return exampleOverrides(index);
		}
		throw new Error(`WIP = Read before ready`);
	};

	return <RenderExample example={props.example} overrides={propOverrides()} />;
};
