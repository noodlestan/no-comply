import { createClassList } from '@no-comply/solid-primitives';
import { Flex, Label } from '@no-comply/standard-ui';
import { type Component, For, Show } from 'solid-js';

import { ShowColor } from '../ShowColor';

import styles from './ShowPalette.module.scss';

type Props = {
	p: string;
	enablePalettes?: boolean;
};

export const ShowPalette: Component<Props> = props => {
	const levels = () => {
		return [50, 100, 200, 300, 400, 500, 600, 700, 800, 850, 900, 950, 1000];
	};

	const classList = createClassList(styles, 'ShowPalette');

	return (
		<Flex direction="row" gap="m" classList={classList()} align="center">
			<Show when={props.p !== 'labels'}>
				<Label>{props.p}</Label>
			</Show>
			<Flex direction="row">
				<For each={levels()}>
					{level => <ShowColor p={props.p} l={level} enablePalettes={props.enablePalettes} />}
				</For>
			</Flex>
		</Flex>
	);
};
