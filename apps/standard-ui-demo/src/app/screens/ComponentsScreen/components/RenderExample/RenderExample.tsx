/* eslint-disable dot-notation */
import { staticClassList } from '@no-comply/solid-primitives';
import { Flex, Layout } from '@no-comply/standard-ui';
import { type TSXView } from '@purrtrait/view-tsx';
import { type Component, type JSX, Show } from 'solid-js';

import type { CompilerAPI } from '../../../../../modules/TSXCompilerModule';
import { JSXRenderer } from '../../../../components';
import { createRenderExample } from '../../../../controllers';
import { type ExamplePropsOverrides } from '../../providers';

import styles from './RenderExample.module.scss';

type Props = {
	compiler: CompilerAPI;
	view: TSXView;
	overrides?: ExamplePropsOverrides;
	controls?: () => JSX.Element;
	onContentsChanged?: (html: string) => void;
};

export const RenderExample: Component<Props> = props => {
	const { source, scope, wrapperProps } = createRenderExample(props);

	return (
		<Layout stretch="full" classList={staticClassList(styles, 'RenderExample')}>
			<Show when={props.controls}>
				<Flex classList={staticClassList(styles, '-Controls')}>{props.controls?.()}</Flex>
			</Show>
			<JSXRenderer
				compiler={props.compiler}
				source={source()}
				scope={scope()}
				wrapperProps={wrapperProps()}
				onContentsChanged={props.onContentsChanged}
			/>
		</Layout>
	);
};
