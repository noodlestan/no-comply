import { extractTSXView } from '@purrtrait/view-tsx';

import { FORCED_DELAY } from '../../../../../../env';
import type { ComponentExampleData, ParsedExample } from '../types';

function delay(ms: number) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

export async function parseExample(data: ComponentExampleData): Promise<ParsedExample> {
	await delay(FORCED_DELAY);

	const tsx = data.tsx;
	const view = extractTSXView(tsx);

	return view;
}
