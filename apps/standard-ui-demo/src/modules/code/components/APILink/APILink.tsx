import type { NoComplyEntityData } from '@no-comply/meta';
import { Flex, Icon, Link, Text } from '@no-comply/standard-ui';
import BookOpenIcon from 'lucide-solid/icons/book-open';
import type { Component } from 'solid-js';

import { routeFor } from '../../../../app/navigation';

type Props = {
	mode?: 'inline' | 'block';
	entity: NoComplyEntityData;
	prefix?: string;
	label?: string;
};

export const APILink: Component<Props> = props => {
	const mode = () => props.mode || 'inline';
	const tag = () => (mode() === 'inline' ? 'span' : 'p');
	const align = () => (mode() === 'inline' ? 'center' : 'end');
	const inline = () => Boolean(mode() === 'inline');

	return (
		<Flex tag={tag()} direction="row" gap="xs" align={align()} inline={inline()}>
			<span>{props.prefix}</span>
			<Link href={routeFor.entity(props.entity)}>
				<Flex tag="span" direction="row" gap="xs" align="center">
					<Icon icon={BookOpenIcon} size="small" />
					<Text size="small">{props.label || 'API'}</Text>
				</Flex>
			</Link>
		</Flex>
	);
};
