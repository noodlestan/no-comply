import type { SearchEntityResult } from '@no-comply/meta';
import { Display, Flex, Link, Text } from '@no-comply/standard-ui';
import { For, Show, createMemo, createSignal } from 'solid-js';
import type { Component } from 'solid-js';

import { useMeta } from '../../../../../providers';
import { DocsItem, DocsSection } from '../../../../content';
import { routeFor } from '../../../../navigation';
import { BasePage } from '../../../../templates';

import { APISearchField } from './fields';

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
					<DocsItem
						gap="l"
						title={
							<Text size="large">
								{results().length} <Show when={results().length === 1}>result</Show>
								<Show when={results().length > 1}>results</Show> for {terms()}
							</Text>
						}
					>
						<For each={results()}>
							{({ entity, symbols, score }) => (
								<Flex direction="column" gap="m" data-search-results-score={score}>
									<Flex direction="row" gap="m">
										<Display level={4}>
											<Link href={routeFor.entity(entity)}>{entity.name}</Link>
										</Display>
										<Text>{entity.package}</Text>
										<Text>{entity.module}</Text>
										<Text>{entity.type}</Text>
										<Text>{entity.description}</Text>
									</Flex>
									<Show when={symbols.length}>
										<For each={symbols}>
											{symbolResults => (
												<Flex direction="column" gap="s">
													<Flex direction="row" gap="m">
														<Link href={routeFor.entitySymbol(entity, symbolResults.symbol.name)}>
															{symbolResults.symbol.name}
														</Link>
														<Text>{symbolResults.description}</Text>
													</Flex>
												</Flex>
											)}
										</For>
									</Show>
								</Flex>
							)}
						</For>
					</DocsItem>
				</Show>
				<Show when={showNoResults()}>
					<DocsItem>
						<Text size="large">No results for {terms()}</Text>
					</DocsItem>
				</Show>
			</DocsSection>
			<Show when={showIndex()}>
				<DocsSection title="Packages">
					<For each={getPackageNames()}>
						{name => (
							<DocsItem title={<Link href={routeFor.package(name)}>{name}</Link>}>{name}</DocsItem>
						)}
					</For>
				</DocsSection>
			</Show>
		</BasePage>
	);
};
