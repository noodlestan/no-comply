import { Code } from '@no-comply/standard-ui';
import { type Component } from 'solid-js';

type ImportStatementProps = {
	name: string;
	package: string;
};

export const ImportStatement: Component<ImportStatementProps> = props => {
	const statement = () => `import { ${props.name} } from '${props.package}';`;

	return <Code size="small">{statement()}</Code>;
};
