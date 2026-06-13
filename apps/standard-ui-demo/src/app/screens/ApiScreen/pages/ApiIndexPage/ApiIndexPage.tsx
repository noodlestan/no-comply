import type { NoComplyEntityData } from '@no-comply/meta';
import { Display, Flex, Link, Text } from '@no-comply/standard-ui';
import type { DeclaredSymbol } from '@purrception/primitives';
import { For, Show, createMemo, createSignal } from 'solid-js';
import type { Component } from 'solid-js';

import { useMeta } from '../../../../../providers';
import { DocsItem, DocsSection } from '../../../../content';
import { routeFor } from '../../../../navigation';
import { BasePage } from '../../../../templates';

import { APISearchField } from './fields';

type SearchResult = {
	entity: NoComplyEntityData;
	macthedName: boolean;
	matchedDescription: boolean;
	matchedSymbols: DeclaredSymbol[];
};

function escapeRegExp(value: string): string {
	return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function searchTerms(value: string): string[] {
	return value
		.trim()
		.split(/\s+/)
		.filter(Boolean)
		.map(escapeRegExp)
		.sort((a, b) => b.length - a.length);
}

function searchRegExp(value: string): RegExp {
	return new RegExp(searchTerms(value).join('|'), 'i');
}

// function highlightRegExp(value: string): RegExp {
// 	return new RegExp(searchTerms(value).join('|'), 'gi');
// }

export const ApiIndexPage: Component = () => {
	const [terms, setTerms] = createSignal<string>();
	const { getPackageNames, getEntities } = useMeta();

	const entities = createMemo<SearchResult[]>(() => {
		const t = terms();
		if (!t) {
			return [];
		}
		const regexp = searchRegExp(t);
		const maybeEntities = getEntities().map(entity => {
			const matchedName = regexp.test(entity.name);
			const matchedDescription = entity.description ? regexp.test(entity.description) : undefined;
			const matchedSymbols = Object.values(entity.symbols.declared).filter(
				symbol =>
					regexp.test(symbol.name) ||
					(symbol.description ? regexp.test(symbol.description) : undefined),
			);

			if (matchedName || matchedDescription || matchedSymbols.length) {
				return {
					entity,
					matchedName,
					matchedDescription,
					matchedSymbols,
				};
			}
			return undefined;
		}) as (SearchResult | undefined)[];
		return maybeEntities.filter(item => Boolean(item)) as SearchResult[];
	});

	const showResults = () => terms()?.length && entities().length;
	const showNoResults = () => terms()?.length && !entities().length;

	return (
		<BasePage title="API">
			<DocsSection title="Search">
				<Flex direction="row">
					<APISearchField value={terms()} onValueChange={setTerms} />
				</Flex>
				<Show when={showResults()}>
					<DocsItem
						gap="l"
						title={
							<Text variant="large">
								{entities().length} <Show when={entities().length === 1}>result</Show>
								<Show when={entities().length > 1}>results</Show> for {terms()}
							</Text>
						}
					>
						<For each={entities()}>
							{({ entity, matchedSymbols }) => (
								<Flex direction="column" gap="m">
									<Flex direction="row" gap="m">
										<Display level={4}>
											<Link href={routeFor.entity(entity)}>{entity.name}</Link>
										</Display>
										<Text>{entity.package}</Text>
										<Text>{entity.module}</Text>
										<Text>{entity.type}</Text>
									</Flex>
									<Show when={matchedSymbols.length}>
										<For each={matchedSymbols}>
											{symbol => (
												<Flex direction="column" gap="s">
													<Flex direction="row" gap="m">
														<Link href={routeFor.entitySymbol(entity, symbol.name)}>
															{symbol.name}
														</Link>
														<Text>{symbol.description}</Text>
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
						<Text variant="large">No results for {terms()}</Text>
					</DocsItem>
				</Show>
			</DocsSection>
			<Show when={!terms() || showNoResults()}>
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
