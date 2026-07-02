import { staticClassList } from '@no-comply/solid-primitives';
import { Flex, Link, Text } from '@no-comply/standard-ui';
import { type Component, Show } from 'solid-js';

import { routeFor } from '../../../../../navigation';

import styles from './ApiBreadcrumbs.module.scss';

type Props = {
	pkg: string;
	mod?: string;
	type?: string;
	ent?: string;
};

export const ApiBreadcrumbs: Component<Props> = props => {
	const classList = staticClassList(styles, 'ApiBreadcrumbs');

	return (
		<Flex
			direction="row"
			align="center"
			padding={['none', 'none', 'm']}
			gap="s"
			classList={classList}
		>
			<Text size="large">
				<Link href={routeFor.api()}>API</Link>
				<Show when={!props.mod}> / Package</Show>
				<Show when={props.mod}>
					{' '}
					/ <Link href={routeFor.package(props.pkg)}>{props.pkg}</Link>
					<Show when={!props.type}> / module</Show>
					<Show when={props.type}>
						{' '}
						/ <Link href={routeFor.module(props.pkg, props.mod as string)}>{props.mod}</Link> /{' '}
						{props.type}: {props.ent}
					</Show>
				</Show>
			</Text>
		</Flex>
	);
};
