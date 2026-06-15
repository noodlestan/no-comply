import { extractTSXView } from '@purrtrait/view-tsx';
import { type Accessor, createResource } from 'solid-js';

import type { ExampleData, ParsedExample, ParsedExampleAPI } from '../types';

function delay(ms: number) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

async function parseExample(data: ExampleData): Promise<ParsedExample> {
	await delay(500);

	const tsx = data.tsx;
	const view = extractTSXView(tsx);

	return { view };
}

export const createParseExample = (data: Accessor<ExampleData>): ParsedExampleAPI => {
	const [parsed] = createResource(data, parseExample);

	return {
		data: data(),
		parsed,
	};
};
