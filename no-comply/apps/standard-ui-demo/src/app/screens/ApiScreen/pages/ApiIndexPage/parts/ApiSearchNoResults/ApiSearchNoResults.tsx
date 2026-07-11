import { Text } from '@no-comply/standard-ui';
import type { Component } from 'solid-js';

import { DocsItem } from '../../../../../../content';

interface ApiSearchNoResultsProps {
	terms: string;
}

export const ApiSearchNoResults: Component<ApiSearchNoResultsProps> = props => {
	return (
		<DocsItem>
			<Text size="large">No results for {props.terms}</Text>
		</DocsItem>
	);
};
