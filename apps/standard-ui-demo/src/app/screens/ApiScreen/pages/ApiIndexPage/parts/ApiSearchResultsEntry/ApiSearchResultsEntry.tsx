import type { SearchEntityResult } from '@no-comply/meta';
import { Display, Flex, Link, Text } from '@no-comply/standard-ui';
import { For, Show } from 'solid-js';
import type { Component } from 'solid-js';

import { routeFor } from '../../../../../../navigation';

type Props = {
	result: SearchEntityResult;
};

export const ApiSearchResultsEntry: Component<Props> = props => {
	return (
		<Flex direction="column" gap="m" data-search-results-score={props.result.score}>
			<Flex direction="row" gap="m">
				<Display level={4}>
					<Link href={routeFor.entity(props.result.entity)}>{props.result.entity.name}</Link>
				</Display>
				<Text>{props.result.entity.package}</Text>
				<Text>{props.result.entity.module}</Text>
				<Text>{props.result.entity.type}</Text>
				<Text>{props.result.entity.description}</Text>
			</Flex>
			<Show when={props.result.symbols.length}>
				<For each={props.result.symbols}>
					{symbolResults => (
						<Flex direction="column" gap="s">
							<Flex direction="row" gap="m">
								<Link href={routeFor.entitySymbol(props.result.entity, symbolResults.symbol.name)}>
									{symbolResults.symbol.name}
								</Link>
								<Text>{symbolResults.description}</Text>
							</Flex>
						</Flex>
					)}
				</For>
			</Show>
		</Flex>
	);
};
