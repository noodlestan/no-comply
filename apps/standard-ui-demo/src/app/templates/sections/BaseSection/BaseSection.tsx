import { type ClassList, shortId } from '@no-comply/solid-primitives';
import { Display, type DisplayLevel, Flex } from '@no-comply/standard-ui';
import type { JSX, ParentComponent } from 'solid-js';

export type BaseSectionProps = {
	title: JSX.Element;
	label?: string;
	level?: DisplayLevel;
	classList?: ClassList;
	undertitle?: JSX.Element;
	before?: JSX.Element;
	after?: JSX.Element;
	children: JSX.Element;
};

export const BaseSection: ParentComponent<BaseSectionProps> = props => {
	const labelId = () =>
		props.label ? props.label : typeof props.title === 'string' ? props.title : shortId();

	return (
		<Flex tag="section" gap="l" classList={props.classList} aria-labelledby={labelId}>
			<Flex gap="s">
				<Display level={props.level ?? 3} id={labelId()}>
					{props.title}
				</Display>
				{props.undertitle}
			</Flex>
			{props.before}
			<Flex gap="2xl">{props.children}</Flex>
			{props.before}
		</Flex>
	);
};
