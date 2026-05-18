import { Link } from '@no-comply/standard-ui';
import type { CodeLayoutToken } from '@purrtrait/code-layout';
import { type Component } from 'solid-js';

type Props = {
	token: CodeLayoutToken;
};

export const CodeBlockLink: Component<Props> = props => {
	const href = () => props.token.link as string;

	return <Link href={href()}>{props.token.value}</Link>;
};
