import {
	type ClassList,
	createClassList,
	createDataAttributes,
	shortId,
} from '@no-comply/solid-primitives';
import { Display, type DisplayLevel, Flex } from '@no-comply/standard-ui';
import { useLocation } from '@solidjs/router';
import { type JSX, type ParentComponent, createEffect, createSignal, onCleanup } from 'solid-js';

import styles from './BaseSection.module.scss';

export type BaseSectionProps = {
	title: JSX.Element;
	label?: string;
	level?: DisplayLevel;
	classList?: ClassList;
	overtitle?: JSX.Element;
	undertitle?: JSX.Element;
	before?: JSX.Element;
	after?: JSX.Element;
	children: JSX.Element;
};

export const BaseSection: ParentComponent<BaseSectionProps> = props => {
	const labelId = () =>
		props.label ? props.label : typeof props.title === 'string' ? props.title : shortId();

	const [highlighted, setHighlighted] = createSignal(false);

	const location = useLocation();

	let timeout: number;

	const checkHash = (hash: string) => {
		clearTimeout(timeout);
		const highlighted = hash === labelId();
		setHighlighted(highlighted);
		if (highlighted) {
			timeout = window.setTimeout(() => {
				setHighlighted(false);
			}, 1000);
		}
	};

	createEffect(() => {
		const hash = location.hash.slice(1);
		checkHash(hash);
	});

	onCleanup(() => {
		clearTimeout(timeout);
	});

	const classList = createClassList(styles, () => {
		return {
			...props.classList,
			BaseSection: true,
		};
	});

	const attributes = createDataAttributes(() => ({ 'is-active': highlighted() }));

	return (
		<Flex
			tag="section"
			gap="l"
			classList={classList()}
			aria-labelledby={labelId()}
			{...attributes()}
		>
			<Flex gap="s">
				{props.overtitle}
				<Display level={props.level ?? 3} id={labelId()}>
					{props.title}
				</Display>
				{props.undertitle}
			</Flex>
			{props.before}
			<Flex gap="2xl">{props.children}</Flex>
			{props.after}
		</Flex>
	);
};
