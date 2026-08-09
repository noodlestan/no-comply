import type { SearchEntityResult } from '@no-comply/meta';
import { Flex, Text } from '@no-comply/standard-ui';
import { Show, createMemo, createSignal } from 'solid-js';
import type { Component } from 'solid-js';

import { useMeta } from '../../../../../providers';
import { DocsItem, DocsSection } from '../../../../content';
import { BasePage } from '../../../../templates';

import { APISearchField } from './fields';
import { ApiIndexListSection, ApiSearchResults } from './parts';

const MIN_SEARCH_LENGTH = 2;

export const ApiIndexPage: Component = () => {
	const [terms, setTerms] = createSignal<string>();
	const { getPackageNames, searchEntities } = useMeta();

	const minLengthTerms = () => {
		const currentTerms = terms() || '';
		return currentTerms.length < MIN_SEARCH_LENGTH ? '' : currentTerms;
	};

	const results = createMemo<SearchEntityResult[]>(() => {
		const minTerms = minLengthTerms();
		if (!minTerms) {
			return [];
		}
		return searchEntities(minTerms);
	});

	const showResults = () => minLengthTerms().length && results().length;
	const showNoResults = () => minLengthTerms().length && !results().length;
	const showIndex = () => !minLengthTerms() || showNoResults();
	const showHint = () => terms() && !minLengthTerms();

	return (
		<BasePage title="API">
			<DocsSection title="Search">
				<Flex direction="column" gap="s" justify="start">
					<Flex direction="row">
						<APISearchField value={terms()} onValueChange={setTerms} />
					</Flex>
					<Show when={showHint()}>
						<Text size="small">Type one more character...</Text>
					</Show>
				</Flex>
				<Show when={showResults()}>
					<ApiSearchResults results={results()} terms={terms() as string} />
				</Show>
				<Show when={showNoResults()}>
					<DocsItem>
						<Text size="large">No results for {terms()}</Text>
					</DocsItem>
				</Show>
			</DocsSection>
			<Show when={showIndex()}>
				<ApiIndexListSection packageNames={getPackageNames()} />
			</Show>
		</BasePage>
	);
};
