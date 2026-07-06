import { Link } from '@no-comply/standard-ui';
import type { ImportedSymbol } from '@purrception/primitives';
import { type Component } from 'solid-js';

type Props = {
	symbol: ImportedSymbol;
};

export const CodeSymbolLink: Component<Props> = props => {
	const symbol = () => props.symbol;
	const href = () => props.symbol.name;

	return <Link href={href()}>{symbol().name}</Link>;
};
