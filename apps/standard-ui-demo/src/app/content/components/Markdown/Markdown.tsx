import { staticClassList } from '@no-comply/solid-primitives';
import { type Component } from 'solid-js';

import styles from './Markdown.module.scss';

type MarkdownProps = {
	content: string;
};

export const Markdown: Component<MarkdownProps> = props => {
	return <div classList={staticClassList(styles, 'Markdown')}>{props.content}</div>;
};
