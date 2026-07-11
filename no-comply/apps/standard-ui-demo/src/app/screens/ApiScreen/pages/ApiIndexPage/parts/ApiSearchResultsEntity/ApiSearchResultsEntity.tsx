import type { SearchEntityResult } from '@no-comply/meta';
import { Display, Flex, Grid, Link, Text } from '@no-comply/standard-ui';
import { For, Show } from 'solid-js';
import type { Component } from 'solid-js';

import { JSDocTagsList } from '../../../../../../../modules/code';
import { routeFor } from '../../../../../../navigation';
import { ApiSearchResultsSymbol } from '../ApiSearchResultsSymbol';

type Props = {
	result: SearchEntityResult;
};

export const ApiSearchResultsEntity: Component<Props> = props => {
	const tags = () => Object.entries(props.result.entity.tags || {});

	return (
		<Flex direction="column" gap="m" data-search-results-score={props.result.score}>
			<Grid columns="min-content auto" columnGap="l" rowGap="s">
				<Display level={4}>
					<Link href={routeFor.entity(props.result.entity)}>{props.result.entity.name}</Link>
				</Display>
				<Flex direction="row" align="end">
					<JSDocTagsList tags={tags()} />
				</Flex>
				<Flex direction="column" gap="s">
					<Text>{props.result.entity.package}</Text>
					<Flex direction="row" gap="m">
						<Text>{props.result.entity.module}</Text>
						<Text>{props.result.entity.type}</Text>
					</Flex>
				</Flex>
				<Text>{props.result.entity.description}</Text>
			</Grid>
			<Show when={props.result.symbols.length}>
				<For each={props.result.symbols}>
					{symbolResult => (
						<ApiSearchResultsSymbol entity={props.result.entity} result={symbolResult} />
					)}
				</For>
			</Show>
		</Flex>
	);
};
