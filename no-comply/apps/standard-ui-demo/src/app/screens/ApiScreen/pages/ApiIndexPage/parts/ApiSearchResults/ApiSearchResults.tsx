import type { SearchEntityResult } from '@no-comply/meta';
import { Text } from '@no-comply/standard-ui';
import { For, Show } from 'solid-js';
import type { Component } from 'solid-js';

import { DocsItem } from '../../../../../../content';
import { ApiSearchResultsEntity } from '../ApiSearchResultsEntity';

type Props = {
	results: SearchEntityResult[];
	terms: string;
};

export const ApiSearchResults: Component<Props> = props => {
	return (
		<DocsItem
			gap="2xl"
			title={
				<Text size="large">
					{props.results.length} <Show when={props.results.length === 1}>result</Show>
					<Show when={props.results.length > 1}>results</Show> for "{props.terms}"
				</Text>
			}
		>
			<For each={props.results}>{result => <ApiSearchResultsEntity result={result} />}</For>
		</DocsItem>
	);
};
