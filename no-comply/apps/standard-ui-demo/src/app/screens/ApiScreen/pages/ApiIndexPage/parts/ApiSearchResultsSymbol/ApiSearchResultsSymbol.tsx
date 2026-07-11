import type { NoComplyEntityData, SearchSymbolResult } from '@no-comply/meta';
import { Flex, Link, Text } from '@no-comply/standard-ui';
import type { Component } from 'solid-js';

import { JSDocTagsList } from '../../../../../../../modules/code';
import { routeFor } from '../../../../../../navigation';

type Props = {
	entity: NoComplyEntityData;
	result: SearchSymbolResult;
};

export const ApiSearchResultsSymbol: Component<Props> = props => {
	const tags = () => Object.entries(props.result.tags || {});

	return (
		<Flex direction="row" gap="m">
			<Link href={routeFor.entitySymbol(props.entity, props.result.symbol.name)}>
				{props.result.symbol.name}
			</Link>
			<Flex direction="column" gap="s">
				<JSDocTagsList tags={tags()} />
				<Text>{props.result.description}</Text>
			</Flex>
		</Flex>
	);
};
